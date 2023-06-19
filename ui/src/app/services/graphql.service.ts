import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {

  constructor(private httpClient: HttpClient) { 

  }


  getClient(id: number) {
    return this.httpClient.get(`/assets/api/v1/client/${id}.json`, {responseType: 'json'});
  }
  getGraphql() {
    const query = `query {
        individual {
          hits
          firstCursor
          lastCursor
          results {
            id
            productURLs {
              wealthmonitor
            }
            fullName
            roles {
              mmgid
              name
              company {
                mmgid
                name
              }
              stake
            }
            address {
              id
              country {
                mmgid
                name
              }
            }
          }
        }
        intelligence {
          hits
          results {
            body
            companyRelationshipGroups {
              issuers {
                mmgid
                name
                ownershipType {
                  mmgid
                  name
                }
              }
              obligors {
                mmgid
                name
                ownershipType {
                  mmgid
                  name
                }
              }
            }
            contentClassification {
              contentCategory
            }
            countries {
              mmgid
              name
              isDominant
              states {
                isDominant
                mmgid
                name
              }
            }
            dominantCountry {
              mmgid
              name
            }
            dominantSector {
              mmgid
              name
            }
            dominantState {
              mmgid
              name
            }
            geographies {
              areas {
                mmgid
                name
                regions {
                  mmgid
                  name
                }
              }
            }
            grade
            headline
            intelligenceTypes {
              mmgid
              name
              subtypes {
                mmgid
                name
              }
            }
            isProprietary
            lastModifiedDate
            mmgid
            municipalsSectors {
              mmgid
              name
              subsectors {
                mmgid
                name
              }
            }
            productAttributes {
              debtwire {
                contentCategories
              }
            }
            publicSources {
              mmgid
              name
              sourceNumber
            }
            publishDate
            sectors {
              mmgid
              name
              subsectors {
                mmgid
                name
              }
            }
            topics {
              groupcode
              mmgid
              name
            }
            productEditions {
              edition
              id
              product
            }
            productURLs {
              product
              url
            }
          }
        }
      }`;

        return this.httpClient.request('POST', "http://localhost:8080/graphql", { body: query, headers: { "Content-Type": "application/json"}});
  }
}
