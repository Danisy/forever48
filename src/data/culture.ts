export interface CultureTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  icon: string;
}

export const cultureTerms: CultureTerm[] = [
  {
    term: "Oshi",
    pronunciation: "推し",
    definition: "The heart of fandom. Derived from the word 'to push', this is the specific member you choose to support above all others. Finding your oshi is a feeling that chooses you.",
    icon: "O",
  },
  {
    term: "Theater Performance",
    definition: "The sanctuary of the 48 Group. Built on the concept of 'idols you can meet', the theater is where members perform regular stages, sweat, cry, and grow closer to their fans.",
    icon: "T",
  },
  {
    term: "Graduation",
    pronunciation: "卒業",
    definition: "A celebrated milestone. Unlike simply 'quitting', graduation is a respectful and emotional departure where a member leaves the group to pursue the next chapter of their life or career.",
    icon: "G",
  },
  {
    term: "Senbatsu",
    pronunciation: "選抜",
    definition: "The chosen ones. A prestigious selection of members who are chosen (often by management, or by fans in a Sousenkyo election) to perform the title track of a single.",
    icon: "S",
  },
  {
    term: "Generations",
    definition: "The legacy of time. Instead of replacing the group, new members are added in 'generations', ensuring the spirit and culture are constantly passed down to fresh talent.",
    icon: "N",
  },
  {
    term: "Sister Groups",
    definition: "An interconnected universe. From AKB48 in Akihabara to JKT48 in Jakarta and KLP48 in Kuala Lumpur, these groups share the same DNA, songs, and traditions across the globe.",
    icon: "U",
  },
  {
    term: "Fan Culture",
    definition: "A symphony of support. Fans participate in performances using synchronized chants (calls), precise glowstick movements (wotagei), and a beautiful sea of color-coded penlights.",
    icon: "F",
  },
];
