export type PostItem = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: any;
  tags?: string | null;
  publishedAt?: string | null;
};

export type PostsResponse = {
  data: PostItem[];
};