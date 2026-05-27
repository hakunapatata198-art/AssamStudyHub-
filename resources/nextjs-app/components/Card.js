import Link from 'next/link';

export default function Card({ title, description, href, meta }) {
  return (
    <Link className="card" href={href}>
      <div className="card-top">
        {meta ? <span className="card-meta">{meta}</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">Open →</span>
    </Link>
  );
}