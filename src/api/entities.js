const createMockEntity = () => ({
  list: async () => [],
  filter: async () => [],
  get: async () => null,
  create: async (data) => data,
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true
});

export const Product = createMockEntity();
export const GalerijItem = createMockEntity();
export const Review = createMockEntity();
export const Bestelling = createMockEntity();
export const FAQItem = createMockEntity();

export const User = {
  me: async () => null,
  login: async () => null,
  logout: async () => null
};
