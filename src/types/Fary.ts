export interface BlogTypes {
  meta: {
    success: boolean;
    messageEn: string;
    messageMm: string;
  };
  body: {
    id: string;
    content: string;
    createdAt: string;
    image: {
      id: string;
      fileName: string;
      path: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
    };
    title: string;
    coverImage: {
      id: string;
      fileName: string;
      path: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      id: string;
      name: string;
    };
  }[];
}
