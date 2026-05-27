import Link from 'next/link';
import { classes, getClassBySlug, getSubject, getChapter } from '../../../../../../../lib/siteData';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return classes.flatMap((course) =>
    course.subjects.flatMap((subject) =>
      subject.chapters.map((chapter) => ({
        classSlug: course.slug,
        subjectSlug: subject.slug,
        chapterSlug: chapter.slug,
      }))
    )
  );
}

export default async function ChapterPage({ params }) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const classItem = getClassBySlug(classSlug);
  const subject = getSubject(classSlug, subjectSlug);
  const chapter = getChapter(classSlug, subjectSlug, chapterSlug);

  if (!classItem || !subject || !chapter) notFound();

  const relatedChapters = subject.chapters.filter((item) => item.slug !== chapter.slug).slice(0, 3);

  return (
    <section className="section">
      <div className="container article-layout">
        <article className="article-card">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href={`/class/${classItem.slug}`}>{classItem.name}</Link>
            <span>›</span>
            <Link href={`/class/${classItem.slug}/subject/${subject.slug}`}>{subject.name}</Link>
            <span>›</span>
            <span>{chapter.title}</span>
          </div>

          <span className="eyebrow">Chapter Solution Template</span>
          <h1>{chapter.title}</h1>
          <p className="lead">
            This is the recommended structure for a student solution page. Replace this sample text
            with your real chapter explanation, step-by-step answers, solved exercises, and exam notes.
          </p>

          <div className="info-strip">
            <span>{classItem.name}</span>
            <span>{subject.name}</span>
            <span>{chapter.pdf ? 'PDF available' : 'Web answer available'}</span>
          </div>

          <section>
            <h2>Short introduction</h2>
            <p>
              Welcome to the complete solution for {chapter.title}. In this lesson, students can read
              simple explanations, important definitions, solved textbook questions, and revision-ready
              notes before exams.
            </p>
          </section>

          <section>
            <h2>Question and answer format</h2>
            <div className="qa-block">
              <h3>Q1. What should this template include?</h3>
              <p>
                Each chapter page should include a summary, main question-answer pairs, exercise
                solutions, downloadable PDF links, and related chapters.
              </p>
            </div>
            <div className="qa-block">
              <h3>Q2. How should answers be written?</h3>
              <p>
                Keep answers student-friendly, clearly formatted, and optimized for both reading and
                revision.
              </p>
            </div>
          </section>

          <section>
            <h2>Download section</h2>
            <div className="download-box">
              <strong>PDF button placeholder</strong>
              <p>Upload your chapter PDF and replace this with a real file link or media attachment.</p>
              <button className="button primary" type="button">Download PDF</button>
            </div>
          </section>

          <section>
            <h2>FAQ</h2>
            <ul className="faq-list">
              <li>Is this answer for board exam preparation?</li>
              <li>Can students download the notes as PDF?</li>
              <li>Will more solved exercises be added later?</li>
            </ul>
          </section>
        </article>

        <aside className="sidebar-card">
          <h3>Related chapters</h3>
          <ul className="sidebar-links">
            {relatedChapters.map((item) => (
              <li key={item.slug}>
                <Link href={`/class/${classSlug}/subject/${subjectSlug}/chapter/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="sidebar-note">
            <h4>Ad / CTA area</h4>
            <p>Use this area for app download, premium notes, newsletter, or ad placement.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}