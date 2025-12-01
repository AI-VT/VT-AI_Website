import "./Lessons.css";

const lessons = [
  {
    id: 1,
    title: "A* Pathfinding",
    description: "Explore the A* search algorithm for shortest pathfinding problems.",
    tags: ["Algorithms", "Search"],
    link: "https://colab.research.google.com/drive/<A_star_notebook_id>"
  },
  {
    id: 2,
    title: "Advanced Reinforcement Learning",
    description: "Dive into advanced concepts and techniques for reinforcement learning.",
    tags: ["RL", "Advanced"],
    link: "https://colab.research.google.com/drive/1d8CK1ir_xQdSNQxV3asXJEZCRfyDra8G?authuser=2"
  },
  {
    id: 3,
    title: "Computer Vision Demo",
    description: "Hands-on computer vision demo with deep learning models.",
    tags: ["Vision", "CNN"],
    link: "https://colab.research.google.com/drive/1s5wnKYtaYXtgTW2JtLeCcCJeIIfuwcYI?authuser=2"
  },
  {
    id: 4,
    title: "Deep Learning Architectures",
    description: "Learn about different deep learning architectures and their use cases.",
    tags: ["Deep Learning", "AI"],
    link: "https://colab.research.google.com/drive/1C-Afx1w3FOK97wxpO-8brSGvijqDuQiQ?authuser=2"
  },
  {
    id: 5,
    title: "GPU Programming",
    description: "Introduction to GPU programming for accelerating computations.",
    tags: ["CUDA", "Performance"],
    link: "https://colab.research.google.com/drive/1C7VctqjBxzE7iiIkCM2CDgPrW43fLvcS?authuser=2"
  },
  {
    id: 6,
    title: "Reinforcement Learning Demo",
    description: "Practical demo of reinforcement learning algorithms in action.",
    tags: ["RL", "Demo"],
    link: "https://colab.research.google.com/drive/1cHeh7PAbhMzpUrJJ5u7DHXxfKrcq5kTq?authuser=2"
  }
];

function LessonCard({ lesson }) {
  return (
    <article className="lesson">
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>

      <ul className="tags">
        {lesson.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {lesson.link && (
        <a
          className="btn"
          href={lesson.link}
          target="_blank"
          rel="noreferrer"
        >
          View Lesson
        </a>
      )}
    </article>
  );
}

export default function Lessons() {
  return (
    <>
      {/* 🧠 SEO for Lessons page */}
      <title>Lessons | VT@AI</title>
      <meta
        name="description"
        content="Browse VT@AI's AI and machine learning lessons, including A* pathfinding, reinforcement learning, deep learning, computer vision, and GPU programming."
      />

      <main className="page">
        <header className="page-head">
          <h1>Lessons</h1>
          <p>Learn AI & ML concepts with step-by-step guides and resources.</p>
        </header>

        <section className="grid">
          {lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} />
          ))}
        </section>
      </main>
    </>
  );
}
