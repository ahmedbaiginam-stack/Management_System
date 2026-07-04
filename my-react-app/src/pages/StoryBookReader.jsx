import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function StoryBookReader() {

  const { id } = useParams();

  const [story, setStory] = useState(null);

  useEffect(() => {
    loadStory();
  }, [id]);

  const loadStory = async () => {
    const res = await API.get(`/features/storybooks/${id}`);
    setStory(res.data);
  };

  if (!story)
    return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">

      <div className="card shadow">

        {story.coverUrl && (
          <img
            src={story.coverUrl}
            alt={story.title}
            style={{
              maxHeight: 350,
              objectFit: "cover",
            }}
          />
        )}

        <div className="card-body">

          <h2>{story.title}</h2>

          <h5 className="text-muted">{story.author}</h5>

          <hr />

          {story.pages && story.pages.length > 0 ? (
            story.pages.map((page, index) => (
              <div
                key={index}
                className="mb-5"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.9",
                }}
              >
                <h5>Page {index + 1}</h5>

                <p>{page}</p>

                <hr />
              </div>
            ))
          ) : (
            <div className="alert alert-warning">
              No story pages available.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}