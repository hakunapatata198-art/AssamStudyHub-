import Card from '../../../../../components/Card';
import SectionTitle from '../../../../../components/SectionTitle';
import { classes, getClassBySlug, getSubject } from '../../../../../lib/siteData';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return classes.flatMap((course) =>
    course.subjects.map((subject) => ({ classSlug: course.slug, subjectSlug: subject.slug }))
  );
}

export default async function SubjectPage({ params }) {
  const { classSlug, subjectSlug } = await params;
  const classItem = getClassBySlug(classSlug);
  const subject = getSubject(classSlug, subjectSlug);

  if (!classItem || !subject) notFound();

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={classItem.name}
          title={`${subject.name} Chapter Solutions`}
          description={`Build one SEO page per chapter. Add chapter summary, question-answer blocks, downloadable PDFs, FAQs, and related chapters.`}
        />
        <div className="card-grid three">
          {subject.chapters.map((chapter) => (
            <Card
              key={chapter.slug}
              title={chapter.title}
              description={`Chapter answer page for ${subject.name} in ${classItem.name}.`}
              href={`/class/${classSlug}/subject/${subjectSlug}/chapter/${chapter.slug}`}
              meta={chapter.pdf ? 'With PDF' : 'Article only'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}