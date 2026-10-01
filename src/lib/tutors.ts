export type Language = "Scratch" | "Python" | "JavaScript";

export type Tutor = {
  id: number;
  name: string;
  language: Language;
  ageFrom: number;
  pricePerLesson: number;
};

export const LANGUAGES: Language[] = ["Scratch", "Python", "JavaScript"];

export const tutors: Tutor[] = [
  { id: 1, name: "Анна Смирнова", language: "Scratch", ageFrom: 7, pricePerLesson: 1200 },
  { id: 2, name: "Игорь Петров", language: "Python", ageFrom: 10, pricePerLesson: 1800 },
  { id: 3, name: "Мария Ковалёва", language: "JavaScript", ageFrom: 12, pricePerLesson: 2000 },
  { id: 4, name: "Дмитрий Орлов", language: "Python", ageFrom: 12, pricePerLesson: 2500 },
  { id: 5, name: "Елена Волкова", language: "Scratch", ageFrom: 6, pricePerLesson: 1000 },
];

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function filterTutors(list: Tutor[], language?: Language): Tutor[] {
  return language ? list.filter((t) => t.language === language) : list;
}

export function formatPrice(rubles: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(rubles)} ₽`;
}
