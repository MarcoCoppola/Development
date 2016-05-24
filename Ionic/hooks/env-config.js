{
  "env": "stage",

  "dev":{
    "sensitiveInfoEnabled": true,
    "logEnabled": false,
    "debugEnabled": true,
    "apiUrl": "'https://intraweb-svil.enel.com/atlante'"
  },

  "stage": {
    "sensitiveInfoEnabled": true,
    "logEnabled": true,
    "debugEnabled": true,
    "apiUrl": "'https://intraweb-coll.enel.com/atlante'"
  },

  "prod": {
    "sensitiveInfoEnabled": false,
    "logEnabled": false,
    "debugEnabled": false,
    "apiUrl": "'https://intraweb.enel.com/atlante'"
  }
}
