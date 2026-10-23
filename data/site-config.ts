export const siteConfig = {
  /** When true, the site shows only the hero and a coming-soon message. */
  comingSoon: true,
  graduationYear: 1977,
  classShort: "'77",
  reunionLabel: '50th Reunion',
  heroDatesLine: 'Dates coming soon · Tucson, Arizona',
  committeeEmail: { user: 'sahuaroclassof1977', domain: 'gmail.com' },
  emailSubject: 'Sahuaro High School Class of 1977 Reunion',
  paymentMemo: "Class of '77 reunion",
  registrationFormEmbedUrl: null as string | null,
  memoriesVideoEmbedUrl: null as string | null,
  attendeesCsvUrl: null as string | null,
  neighborClasses: '1976 & 1978',
} as const;

export function committeeEmailAddress(): string {
  const { user, domain } = siteConfig.committeeEmail;
  return `${user}@${domain}`;
}
