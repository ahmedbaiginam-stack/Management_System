package com.library.management.controller;

import java.util.Map;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.library.management.config.JwtTokenProvider;
import com.library.management.model.User;
import com.library.management.repository.UserRepository;
import com.library.management.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthController(UserService userService,
                          UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    // =========================
    // REGISTER FIXED
    // =========================
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User saved = userService.register(user);

            return ResponseEntity.ok(Map.of(
                    "message", "User registered successfully",
                    "userId", saved.getId()
            ));

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }

    // =========================
    // LOGIN (WORKING)
    // =========================
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {

        Optional<User> optionalUser =
                userRepository.findByEmail(request.get("email"));

        if (optionalUser.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Invalid Email"));
        }

        User user = optionalUser.get();

        if (!passwordEncoder.matches(request.get("password"), user.getPassword())) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Invalid Password"));
        }

        String token = jwtTokenProvider.generateToken(
                user.getEmail(),
                user.getRole()
        );

        return ResponseEntity.ok(Map.of(
                "token", token,
                "userId", user.getId(),
                "name", user.getName(),
                "role", user.getRole()
        ));
    }
}