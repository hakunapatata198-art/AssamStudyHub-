import Link from 'next/link';
import { classes } from '../../lib/siteData';

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = (params.q || '').toLowerCase();

  const results = classes.flatMap((course) =>
    course.subjects.flatMap((subject) =>
      subject.chapters
        .filter((chapter) => {
          const haystack = `${course.name} ${subject.name} ${chapter.title}`.toLowerCase();
          return haystack.includes(query);
        })
        .map((chapter) => ({
          className: course.name,
          classSlug: course.slug,
          subjectName: subject.name,
          subjectSlug: subject.slug,
          ...chapter,
        }))
    )
  );

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Search</span>
        <h1>Results for "{params.q || 'all'}"</h1>
        <p className="lead">Connect this page later to database search, Algolia, or WordPress REST API.</p>

        <div className="search-results">
          {results.length ? (
            results.map((item) => (
              <Link
                key={`${item.classSlug}-${item.subjectSlug}-${item.slug}`}
                className="search-item"
                href={`/class/${item.classSlug}/subject/${item.subjectSlug}/chapter/${item.slug}`}
              >
                <strong>{item.title}</strong>
                <span>
                  {item.className} • {item.subjectName} • {item.pdf ? 'PDF ready' : 'Article ready'}
                </span>
              </Link>
            ))
          ) : (
            <div className="empty-state">No results yet. Add more chapters or connect a CMS search.</div>
          )}
        </div>
      </div>
    </section>
  );
}