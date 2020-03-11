import gql from 'graphql-tag';

export const GET_REPOS = gql`
query($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner) {
           openIssues: issues(first: 10, states: OPEN) {
                nodes {
                    title,
                  state,
                  body
                  comments(first: 10){
                    nodes{
                      bodyText
                    }
                  }
                }
                
            }
    closedIssues: issues(first: 10, states: CLOSED) {
                nodes {
                    title,
                    state,
                    comments(first: 10){
                    nodes{
                      bodyText
                    }
                  }
                }
            }
 
            pullRequests(first: 10){
                nodes{
                  title
                }
    }
        }
    }
`