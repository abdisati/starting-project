import { type ReactNode } from "react";

interface CoarseGoalProps {
  title: string;
  children: ReactNode;
}

export default function CoarseGoal(props: CoarseGoalProps) {
  const { title, children } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
