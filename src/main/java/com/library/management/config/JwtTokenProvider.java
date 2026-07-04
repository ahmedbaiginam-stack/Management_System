package com.library.management.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;

    private Key getKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(String email, String role) {

        Date now = new Date();

        Date expiry = new Date(now.getTime() + expiration);

        return Jwts.builder()

                .setSubject(email)

                .claim("role", role)

                .setIssuedAt(now)

                .setExpiration(expiry)

                .signWith(getKey(), SignatureAlgorithm.HS256)

                .compact();

    }

    public boolean validateToken(String token) {

        try {

            Jwts.parserBuilder()

                    .setSigningKey(getKey())

                    .build()

                    .parseClaimsJws(token);

            return true;

        } catch (Exception e) {

            return false;

        }

    }

    public String getEmail(String token) {

        Claims claims = Jwts.parserBuilder()

                .setSigningKey(getKey())

                .build()

                .parseClaimsJws(token)

                .getBody();

        return claims.getSubject();

    }

    public String getRole(String token) {

        Claims claims = Jwts.parserBuilder()

                .setSigningKey(getKey())

                .build()

                .parseClaimsJws(token)

                .getBody();

        return claims.get("role", String.class);

    }

}