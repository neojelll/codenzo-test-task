import Link from "next/link";
import { LANGUAGES, filterTutors, formatPrice, isLanguage, tutors } from "@/lib/tutors";

type Props = { searchParams: Promise<{ lang?: string }> };

export default async function Home({ searchParams }: Props) {
  const { lang } = await searchParams;
  const language = isLanguage(lang) ? lang : undefined;
  const list = filterTutors(tutors, language);

  return (
    <main>
      <h1>Репетиторы по программированию</h1>

      <nav>
        <Link href="/" aria-current={!language ? "page" : undefined}>
          Все
        </Link>
        {LANGUAGES.map((l) => (
          <Link key={l} href={`/?lang=${l}`} aria-current={l === language ? "page" : undefined}>
            {l}
          </Link>
        ))}
      </nav>

      <ul>
        {list.map((t) => (
          <li key={t.id}>
            <strong>{t.name}</strong>
            <span>
              {t.language} · от {t.ageFrom} лет
            </span>
            <span>{formatPrice(t.pricePerLesson)} / урок</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
