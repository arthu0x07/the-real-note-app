import theme from "@theme/theme";

const CategoryColorEnum: { [key: string]: string } = {
  All: theme.colors.highlight_bg_color,
  Home: theme.colors.category_home_highlight_color,
  Work: theme.colors.category_work_highlight_color,
  Personal: theme.colors.category_personal_highlight_color,
} as const;

export default CategoryColorEnum;
