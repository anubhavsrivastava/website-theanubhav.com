// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useTagsList = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query TagsListQuery {
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            template: { eq: "BlogPost" }
                            draft: { ne: true }
                        }
                    }
                ) {
                    group(field: frontmatter___tag) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `
    );

    return allMarkdownRemark.group;
};

export default useTagsList;
