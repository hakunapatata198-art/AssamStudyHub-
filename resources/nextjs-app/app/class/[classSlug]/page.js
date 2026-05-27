import Card from '../../../components/Card';
import SectionTitle from '../../../components/SectionTitle';
import { getClassBySlug, classes } from '../../../lib/siteData';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return classes.map((item) => ({ classSlug: item.slug }));
}

export default async function ClassPage({ params }) {
  const { classSlug } = await params;
  const classItem = getClassBySlug(classSlug);

  if (!classItem) notFound();

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={classItem.board}
          title={`${classItem.name} Solutions`}
          description={`Choose a subject to see chapter-wise answers, notes, PDFs, and related study materials for ${classItem.name}.`}
        />

        <div className="card-grid three">
          {classItem.subjects.map((subject) => (
            <Card
              key={subject.slug}
              title={subject.name}
              description={`Open ${subject.chapters.length} starter chapters and build out question-answer pages chapter by chapter.`}
              href={`/class/${classItem.slug}/subject/${subject.slug}`}
              meta={`${subject.chapters.length} chapters`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}