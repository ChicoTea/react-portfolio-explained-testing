import * as author1PortfolioArticles from './author1/portfolio/index';

export interface ArticleDocument {
  // "unknown" would be more detailed depends on how you structure frontmatter
  attributes: {
    title: string;
    description: string;
    image: string;
  };

  // When "Mode.TOC" is requested
  toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  html: string;

  // When "Mode.RAW" is requested
  raw: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>

  ReactComponent: React.VFC;
}

export interface Author {
  palette: {
    primary: string;
    secondary: string;
    mode: 'light' | 'dark';
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  biography: string;
  email: string;
  workHistory?: {
    date?: { to: Date; from: Date };
    title: string;
    subTitle: string;
    description: string;
  }[];

  educationExperience?: {
    date?: { to: Date; from: Date };
    title: string;
    subTitle: string;
    description: string;
  }[];

  proficiencies: {}[];

  portfolioArticles?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };

  blog?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };
}

const author1 = {
  palette: {
    primary: '#00FFFF',
    secondary: '#f50057',
    mode: 'dark',
  },
  name: {
    first: 'Katherine',
    last: 'Chicoteau',
    title: 'Passionate about the future of learning',
  },
  biography: '',
  email: 'k.chicoteau.id@gmail.com',
  portfolioArticles: {
    id: 'author1',
    articles: author1PortfolioArticles as any as Record<
      string,
      ArticleDocument
    >,
  },
  proficiencies: [],
  workHistory: [
    {
      date: {
        from: new Date('2023-06-01'),
        to: new Date (),
      },
      description:
        'Liaising with clients to review, edit and proof storyboards, and build courses using Articulate Rise.',
      title: 'eLearning Developer',
      subTitle: 'InfinEd',
    },
    {
      date: {
        from: new Date('2020-01-01'),
        to: new Date('2022-01-01'),
      },
      description:
        'Designed, developed, and delivered online and in-person learning experiences in a collaborative leadership team.',
      title: 'Unit Leader',
      subTitle: 'Girl Guides',
    },
  ],
  educationExperience: [
    {
      title: 'Graduate Certificate in Education (Innovative Learning Design)',
      subTitle: 'Queensland University of Technology',
      description:
        'Researched, designed, and developed digital learning content for a range of audiences and topics, underpinned by theories of design and adult learning.',
      date: {
        from: new Date('2021-01-01'),
        to: new Date('2022-06-01'),
      },
    },
    {
      title: 'Bachelor of Educational Studies',
      subTitle: 'Australian Catholic University',
      description:
        'Designed and implemented learning experiences for children and adolescents aligned with the Australian Curriculum.',
        date: {
          from: new Date('2014-01-01'),
          to: new Date('2019-12-01'),
        },
    },
  ],
} satisfies Author;



export const authorsStaticData = [author1];
