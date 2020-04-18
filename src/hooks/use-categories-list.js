// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useCategoriesList = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query CategoriesListQuery {
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            template: { eq: "BlogPost" }
                            draft: { ne: true }
                            categories: { ne: "" }
                        }
                    }
                ) {
                    group(field: frontmatter___categories) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `
    );

    return allMarkdownRemark.group;
};

export default useCategoriesList;
