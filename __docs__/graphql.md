# Graphql queries

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. In this project we're using AWS implementation that adds some additional annotations to schema definition. However, with small effort it could be modified to typical Apollo one. Below are some examples of how call functions from `Graphql Playground` or new `Postman`.

**listCategory**:

schema:

```grqphql
listCategory(org: String, regionName: ModelCategoryPrimaryCompositeKeyConditionInput, filter: ModelCategoryFilterInput, limit: Int, nextToken: String): ModelCategoryConnection
```

parametes to look for all Categiories within region created after some date:

```json
{
  "org": "sample-org",
  "regionName": {
    "beginsWith": {
      "category": "Prawo",
      "title": ""
    }
  },
  "filter": {
    "createdAt": {
      "gt": "YYYY-MM-DDThh:mm:ss.sssZ"
    }
  },
  "limit": 20,
  "nextToken": "sample-token-from-previous-call"
}
```

\__note_: Category might change due to not optimal Key schema. However it'd still might be used as reference, becouse it follows general convention.

**connected types**:

If you have type hierarchy where type `Conversation` contains table of documents of type `Message` remeber that you can provide params like `nextToken` or `limit` on both levels.
