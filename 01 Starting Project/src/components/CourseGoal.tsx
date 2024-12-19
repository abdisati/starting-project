interface Info {
  title: string;
  description: string;
}

export default function CoarseGoal(props: Info) {
  const { title, description } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
