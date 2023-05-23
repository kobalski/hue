import {
  HueConfig,
  Namespace
} from '../../config/types';

export const mockConfigResponse: HueConfig = {
  "app_config": {
    "editor": {
      "name": "editor",
      "displayName": "Editor",
      "buttonName": "Query",
      "interpreters": [
        {
          "name": "Trino (Presto SQL)",
          "type": "1",
          "id": "1",
          "displayName": "Trino (Presto SQL)",
          "buttonName": "Query",
          "tooltip": "3 Query",
          "optimizer": "api",
          "page": "/editor/?type=3",
          "is_sql": true,
          "is_batchable": true,
          "dialect": "presto",
          "dialect_properties": {
            "is_sql": true,
            "sql_identifier_quote": "\"",
            "sql_identifier_comment_single": "--",
            "has_catalog": true,
            "has_database": true,
            "has_table": true,
            "has_live_queries": false,
            "has_optimizer_risks": true,
            "has_optimizer_values": true,
            "has_auto_limit": false,
            "has_reference_language": false,
            "has_reference_functions": false,
            "has_use_statement": false
          }
        },
      ],
      "default_limit": 5000,
      "interpreter_names": [
        "1"
      ],
      "page": "/editor/?type=1",
      "default_sql_interpreter": "1"
    },
    "catalogs": [],
    "home": {
      "name": "home",
      "displayName": "Home",
      "buttonName": "Saved Queries",
      "interpreters": [],
      "page": "/home"
    }
  },
  "default_sql_interpreter": "1",
  "cluster_type": "direct",
  "has_computes": false,
  "hue_config": {
    "enable_sharing": true,
    "collect_usage": false
  },
  "clusters": [
    {
      "id": "default",
      "name": "demo.gethue.com",
      "type": "direct",
      "credentials": {}
    }
  ],
  "documents": {
    "types": [
      "query-mysql",
      "directory"
    ]
  },
  "status": 0,
  "button_action": [],
  "main_button_action": {
    "buttonName": "",
    "displayName": "string",
    "interpreters": [],
    "name": ""
  }
}

export const mockNameSpaceResponse:Record<string, Namespace[]>= {
  "1": [
    {
      "id": "default",
      "name": "default",
      "status": "CREATED",
      "computes": [
        {
          "id": "default",
          "name": "default",
          "type": "direct",
        }
      ]
    }
  ]
}