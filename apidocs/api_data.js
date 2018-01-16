define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/admin",
    "title": "Create a new admin",
    "name": "CreateAdmin",
    "description": "<p>This is where a new admin is created.</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email addresse of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm password of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>First of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name of the admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\",\n  \"role\": \"Admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoNotmatch",
            "description": "<p>Password do not match.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"Password doesn\\'t match, What a shame!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AdminController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/:id",
    "title": "Delete a admin",
    "name": "DeleteAdmin",
    "description": "<p>This is where an admin is deleted</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Admin with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AdminController.js",
    "groupTitle": "Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdminIdNotProvided",
            "description": "<p>No admin id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdminNotFound",
            "description": "<p>The admin was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No admin id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No admin with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/:id",
    "title": "Get admin(s)",
    "name": "GetAdmin_s_",
    "description": "<p>This is where admins are retrieved.</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>admin ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>Admin response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AdminController.js",
    "groupTitle": "Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdminNotFound",
            "description": "<p>The admin was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No admin with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/approver",
    "title": "Approve a user",
    "name": "Approve",
    "description": "<p>This is where a newly registered user is approved instead of beign rejected by an admin.</p>",
    "group": "Approver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be approved.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been approved'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ApproverController.js",
    "groupTitle": "Approver",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/approver/:id",
    "title": "Get unapproved user(s)",
    "name": "Get",
    "description": "<p>This is where unapproved users are retrieved.</p>",
    "group": "Approver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ApproverController.js",
    "groupTitle": "Approver",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/approver",
    "title": "Reject a user",
    "name": "Reject",
    "description": "<p>This is where a newly registered user is rejected instead of beign approved by an admin.</p>",
    "group": "Approver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be rejected.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been rejected'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ApproverController.js",
    "groupTitle": "Approver",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/auth/user",
    "title": "Login a user",
    "name": "Login",
    "description": "<p>This is where a user is logged in, and a token generated and returned.</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Details of the logged in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token for accessing all parts of the plartform.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {},\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9rb2xpbGVtdWVsM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordOrUsernameInvalid",
            "description": "<p>Username or password invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordAndUsernameRequired",
            "description": "<p>Username and password required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'username or password invalid.'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'Username and password required.'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/auth/admin",
    "title": "Login a user",
    "name": "Login",
    "description": "<p>This is where a user is logged in, and a token generated and returned.</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Details of the logged in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token for accessing all parts of the plartform.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {},\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9rb2xpbGVtdWVsM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordOrUsernameInvalid",
            "description": "<p>Username or password invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordAndUsernameRequired",
            "description": "<p>Username and password required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'username or password invalid.'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'Username and password required.'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/donation",
    "title": "Create a new donation",
    "name": "CreateDonation",
    "description": "<p>This is where a new donation is created.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minAmount",
            "description": "<p>Minimum amount acceptable as donation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationInfoNotComplete",
            "description": "<p>Donation info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { title | banner | description | minAmount} provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation"
  },
  {
    "type": "post",
    "url": "/api/v1/donation/payment",
    "title": "Pay for a donation",
    "name": "CreatePayment",
    "description": "<p>This is where a donation payment is created.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to be paid for donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "donator",
            "description": "<p>User id of the donator.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "donation",
            "description": "<p>donation id of the donation beign paid for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>State/status of the payment. Must be any of 'pending', 'approved', 'denied', 'free'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9d56b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationIdNotProvided",
            "description": "<p>No Donation id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationNotFound",
            "description": "<p>The Donation was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PayerIdNotProvided",
            "description": "<p>No Payer id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AmountNotProvided",
            "description": "<p>No Amount provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Donation id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Donation with such id existing'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payer id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Amount provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/donation/:id",
    "title": "Delete a donation",
    "name": "DeleteDonation",
    "description": "<p>This is where a donation is deleted</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Donation Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Donation with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationIdNotProvided",
            "description": "<p>No Donation id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationNotFound",
            "description": "<p>The Donation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Donation id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Donation with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/donation/:id",
    "title": "Get donation(s)",
    "name": "GetDonation",
    "description": "<p>This is where donations are retrieved.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Donation id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "donation",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationNotFound",
            "description": "<p>The Donation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Donation with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/donation/:id",
    "title": "Get payment(s)",
    "name": "GetPayment",
    "description": "<p>This is where donation payments are retrieved.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Payment id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payment",
            "description": "<p>Payment response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/donation/:id",
    "title": "Update a donation",
    "name": "UpdateDonation",
    "description": "<p>This is where a donation is updated.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the donation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "minAmount",
            "description": "<p>Minimum amount acceptable as donation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Donation with id 59dce9d56b54d91c38847825 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationIdNotProvided",
            "description": "<p>No Donation id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DonationNotFound",
            "description": "<p>The Donation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Donation id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Donation with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/donation/payment/:id",
    "title": "Update a donation payment",
    "name": "UpdatePayment",
    "description": "<p>This is where a donation payment is updated.</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the donation payment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>State/status of the donation payment. Must be any of 'pending', 'approved', 'denied'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Donation payment with id 59dce9d56b54d91c38847825 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentIdNotProvided",
            "description": "<p>No Payment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/donation/upload",
    "title": "Upload a donation banner",
    "name": "UploadBanner",
    "description": "<p>This is where a donation image banner is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Donation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Banner image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/donation/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BannerImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DonationController.js",
    "groupTitle": "Donation"
  },
  {
    "type": "post",
    "url": "/api/v1/events",
    "title": "Create a new event",
    "name": "CreateEvent",
    "description": "<p>This is where a new event is created.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fee",
            "description": "<p>Fee for the event.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventInfoNotComplete",
            "description": "<p>Event info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { title | banner | description | fee} provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/api/v1/event/payment",
    "title": "Pay for an event",
    "name": "CreatePayment",
    "description": "<p>This is where an event payment is created.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to be paid for event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payer",
            "description": "<p>User id of the payer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event id of the training beign paid for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>State/status of the payment. Must be any of 'pending', 'approved', 'denied', 'free'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9d56b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventIdNotProvided",
            "description": "<p>No Event id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The Event was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PayerIdNotProvided",
            "description": "<p>No Payer id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AmountNotProvided",
            "description": "<p>No Amount provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Event id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Event with such id existing'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payer id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Amount provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/event/:id",
    "title": "Delete a event",
    "name": "DeleteEvent",
    "description": "<p>This is where a event is deleted</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Event Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Event with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventIdNotProvided",
            "description": "<p>No Event id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The Event was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Event id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Event with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/event/:id",
    "title": "Get event(s)",
    "name": "GetEvent",
    "description": "<p>This is where events are retrieved.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Event id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The Event was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Event with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/event/:id",
    "title": "Get payment(s)",
    "name": "GetPayment",
    "description": "<p>This is where payments are retrieved.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Payment id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payment",
            "description": "<p>Payment response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/event/:id",
    "title": "Update an event",
    "name": "UpdateEvent",
    "description": "<p>This is where an event is updated.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fee",
            "description": "<p>Fee for the event.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Event with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventIdNotProvided",
            "description": "<p>No Event id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The Event was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Event id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Event with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/event/payment/:id",
    "title": "Update a payment",
    "name": "UpdatePayment",
    "description": "<p>This is where a payment is updated.</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the payment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>State/status of the payment. Must be any of 'pending', 'approved', 'denied', 'free'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Payment with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentIdNotProvided",
            "description": "<p>No Payment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/event/upload",
    "title": "Upload an event banner",
    "name": "UploadBanner",
    "description": "<p>This is where a event image banner is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Banner image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/event/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/api/v1/forum/comment",
    "title": "Create a new forum comment",
    "name": "CreateComment",
    "description": "<p>This is where a new forum comment is created.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>the content of the comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>the user id of the commentor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post",
            "description": "<p>the forum post to comment on.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommenttOwnerIdNotProvided",
            "description": "<p>No comment creator user id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Creator/Owner user id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum"
  },
  {
    "type": "post",
    "url": "/api/v1/forum/post",
    "title": "Create a new forum post",
    "name": "CreatePost",
    "description": "<p>This is where a new forum post is created.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the forum post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>User id of the post creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Id of forum topic to which the post  will belong.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostOwnerIdNotProvided",
            "description": "<p>No post creator user id provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Creator/Owner user id provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum"
  },
  {
    "type": "post",
    "url": "/api/v1/forum/topic",
    "title": "Create a new forum topic",
    "name": "CreateTopic",
    "description": "<p>This is where a new forum topic is created.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the forum topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "creator",
            "description": "<p>User ID of the topic creator.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicOwnerIdNotProvided",
            "description": "<p>No forum topic owner id provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Creator/Owner user id provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum"
  },
  {
    "type": "delete",
    "url": "/api/v1/forum/comment/:id",
    "title": "Delete a forum comment",
    "name": "DeleteComment",
    "description": "<p>This is where a forum comment is deleted</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Comment with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentIdNotProvided",
            "description": "<p>No comment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Comment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/forum/post/:id",
    "title": "Delete a forum post",
    "name": "DeletePost",
    "description": "<p>This is where a forum post is deleted</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/forum/topic/:id",
    "title": "Delete a forum topic",
    "name": "DeleteTopic",
    "description": "<p>This is where a forum topic is deleted</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Topic with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicIdNotProvided",
            "description": "<p>No Topic id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>The id of the Topic was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Topic id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Topic with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/forum/comment/:id",
    "title": "Get comment(s)",
    "name": "GetComment_s_",
    "description": "<p>This is where forum comment(s) is retrieved</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Comment Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \"........\": \"..................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/forum/post/:id",
    "title": "Get post(s)",
    "name": "GetPost_s_",
    "description": "<p>This is where forum post(s) is retrieved</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Post Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \"........\": \"..................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/forum/topic/:id",
    "title": "Get topic(s)",
    "name": "GetTopic_s_",
    "description": "<p>This is where forum topic(s) is retrieved</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Topic Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Topic response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \"........\": \"..................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>The id of the Topic was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Topic with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/forum/comment/:id",
    "title": "Update a forum comment",
    "name": "UpdateComment",
    "description": "<p>This is where a forum comment is updated.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>topic Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>the content of the comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Comment with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentIdNotProvided",
            "description": "<p>No comment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Comment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/forum/post/:id",
    "title": "Update a forum post",
    "name": "UpdatePost",
    "description": "<p>This is where a forum post is updated.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>topic Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the forum post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>the content of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>Id of forum topic to which the post  will belong.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/forum/topic/:id",
    "title": "Update a forum topic",
    "name": "UpdateTopic",
    "description": "<p>This is where a forum topic is updated.</p>",
    "group": "Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>topic Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the forum topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "creator",
            "description": "<p>User ID of the topic creator.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Topic with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ForumController.js",
    "groupTitle": "Forum",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicIdNotProvided",
            "description": "<p>No Topic id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TopicNotFound",
            "description": "<p>The id of the Topic was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Topic id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Topic with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/knowledgebase/category",
    "title": "Create a new category",
    "name": "CreateCategory",
    "description": "<p>This is where a new category is created.</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the category.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase"
  },
  {
    "type": "post",
    "url": "/api/v1/knowledgebase/document",
    "title": "Create a new document",
    "name": "CreateDocument",
    "description": "<p>This is where a new document is created.</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUrl",
            "description": "<p>Cloud storage url of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploader",
            "description": "<p>Id of the user who uploaded the docment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Id of category the document will belong to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryIdNotProvided",
            "description": "<p>No Category id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UploaderIdNotProvided",
            "description": "<p>No Uploader id provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Category id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Uploader id provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/knowledgebase/category/:id",
    "title": "Delete a category",
    "name": "DeleteCategory",
    "description": "<p>This is where a category is deleted</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Category with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryIdNotProvided",
            "description": "<p>No Category id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Category id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Category with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/knowledgebase/document/:id",
    "title": "Delete a document",
    "name": "DeleteDocument",
    "description": "<p>This is where a document is deleted</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Document with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentIdNotProvided",
            "description": "<p>No Document id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The Document was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Document id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Document with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/knowledgebase/category/:id",
    "title": "Get category(s)",
    "name": "GetCategory",
    "description": "<p>This is where categories are retrieved.</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Category id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Category with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/knowledgebase/document/:id",
    "title": "Get document(s)",
    "name": "GetDocument",
    "description": "<p>This is where documents are retrieved.</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Document id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Document response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The Document was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Document with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/:id",
    "title": "Update an admin",
    "name": "UpdateAdmin",
    "description": "<p>This is where an admin is updated</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Admin with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/AdminController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdminIdNotProvided",
            "description": "<p>No admin id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AdminNotFound",
            "description": "<p>The admin was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No admin id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No admin with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/knowledgebase/category/:id",
    "title": "Update a category",
    "name": "UpdateCategory",
    "description": "<p>This is where a category is updated</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Category with id 59dce9d56b54d91c38847825 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryIdNotProvided",
            "description": "<p>No Category id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Category id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Category with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/knowledgebase/document/:id",
    "title": "Update a document",
    "name": "UpdateDocument",
    "description": "<p>This is where a document is updated</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "docUrl",
            "description": "<p>Cloud storage url of the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uploader",
            "description": "<p>Id of the user who uploaded the docment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Document with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentIdNotProvided",
            "description": "<p>No Document id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The Document was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Document id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Document with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/knowledgebase/document/upload",
    "title": "Upload a document",
    "name": "UploadDocument",
    "description": "<p>This is where a knowledgebase document is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Knowledgebase",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Document to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/knowledgebase/27ba91b3-ab78-4240-aa6c-a1f32230227c.pdf\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentNotUploaded",
            "description": "<p>No document uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No document uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/KnowledgeBaseController.js",
    "groupTitle": "Knowledgebase"
  },
  {
    "type": "post",
    "url": "/api/v1/levels",
    "title": "Create a new level",
    "name": "CreateLevel",
    "description": "<p>This is where a new level is created.</p>",
    "group": "Levels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the membership level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fee",
            "description": "<p>Fee for the memebership level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the membership level.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Level with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/LevelsController.js",
    "groupTitle": "Levels",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelIdNotProvided",
            "description": "<p>No Level id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelNotFound",
            "description": "<p>The Level was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Level id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Level with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/levels/:id",
    "title": "Delete a level",
    "name": "DeleteLevel",
    "description": "<p>This is where a level is deleted</p>",
    "group": "Levels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Level with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/LevelsController.js",
    "groupTitle": "Levels",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelIdNotProvided",
            "description": "<p>No Level id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelNotFound",
            "description": "<p>The Level was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Level id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Level with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/levels/:id",
    "title": "Get project(s)",
    "name": "GetLevel",
    "description": "<p>This is where levels are retrieved.</p>",
    "group": "Levels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Level id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>Level response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/LevelsController.js",
    "groupTitle": "Levels",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The Project was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Project with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/projects/:id",
    "title": "Delete a project",
    "name": "DeleteProject",
    "description": "<p>This is where a project is deleted</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Project with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ProjectsController.js",
    "groupTitle": "Project",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectIdNotProvided",
            "description": "<p>No Project id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The Project was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Project id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Project with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/projects/:id",
    "title": "Get project(s)",
    "name": "Get",
    "description": "<p>This is where projects are retrieved.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Project id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ProjectsController.js",
    "groupTitle": "Project",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The Project was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Project with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/projects/upload",
    "title": "Upload a project banner",
    "name": "UploadBanner",
    "description": "<p>This is where a project image banner is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Banner image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/project/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ProjectsController.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/api/v1/projects",
    "title": "Create a new project",
    "name": "CreateProject",
    "description": "<p>This is where a new project is created.</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the project.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectInfoNotComplete",
            "description": "<p>Post info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { title | banner | description } provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ProjectsController.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "/api/v1/projects/post",
    "title": "Create a new project",
    "name": "CreateProject",
    "description": "<p>This is where a new project is created.</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the membership level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fee",
            "description": "<p>Fee for the memebership level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the membership level.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levels",
            "description": "<p>Level name and id returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9c16b54d91c38847825\",\n  \"....\": \"......................\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelsInfoNotComplete",
            "description": "<p>Post info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { name | fee | description } provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/LevelsController.js",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "/api/v1/projects",
    "title": "Update a project",
    "name": "UpdateProject",
    "description": "<p>This is where a project is updated.</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the project.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Project with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ProjectsController.js",
    "groupTitle": "Projects",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectIdNotProvided",
            "description": "<p>No Project id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The Project was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Project id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Project with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/referrer",
    "title": "Approve a user",
    "name": "Approve",
    "description": "<p>This is where a newly registered user is approved instead of beign rejected by a referrer.</p>",
    "group": "Referrer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be approved.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been approved'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ReferrerController.js",
    "groupTitle": "Referrer",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/reerrer/:id",
    "title": "Get unapproved user(s)",
    "name": "Get",
    "description": "<p>This is where unverified users are retrieved.</p>",
    "group": "Referrer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ReferrerController.js",
    "groupTitle": "Referrer",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/referrer",
    "title": "Reject a user",
    "name": "Reject",
    "description": "<p>This is where a newly registered user is rejected instead of beign approved by a referrer.</p>",
    "group": "Referrer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be rejected.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been rejected'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/ReferrerController.js",
    "groupTitle": "Referrer",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/accept",
    "title": "Accept a friend request",
    "name": "Accept",
    "description": "<p>This is where the requestee accepts a friend request from a requester</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requester",
            "description": "<p>ID of the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestee",
            "description": "<p>ID of the requestee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Friend request accepted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesterIdNotProvided",
            "description": "<p>No Requester id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesteeIdNotProvided",
            "description": "<p>No Requestee id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requester id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requestee id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/cancel",
    "title": "Cancel a friend request",
    "name": "Cancel",
    "description": "<p>This is where a friend request is canceled befor it is accepted by the requestee</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requester",
            "description": "<p>ID of the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requetee",
            "description": "<p>ID of the requestee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"'Friend request canceled\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesterIdNotProvided",
            "description": "<p>No Requester id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesteeIdNotProvided",
            "description": "<p>No Requestee id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requester id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requestee id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/comment",
    "title": "Create a new comment",
    "name": "CreateComment",
    "description": "<p>This is where a comment on post is created</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment to be made on a post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>User id of the commentor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post",
            "description": "<p>Post id of the post to be commented on.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the comment id of the newly created comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OwnerIdNotProvided",
            "description": "<p>No Owner/User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotProvided",
            "description": "<p>No comment provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No post content provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No comment provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social"
  },
  {
    "type": "post",
    "url": "/api/v1/social/post",
    "title": "Create a new social post",
    "name": "CreatePost",
    "description": "<p>This is where a new social post is created.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postText",
            "description": "<p>Text content of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>User ID of the post creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postImage",
            "description": "<p>Url of images associated with the post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostOwnerIdNotProvided",
            "description": "<p>No post owner id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostContentNotProvided",
            "description": "<p>No post content provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Creator/Owner user id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No post content provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social"
  },
  {
    "type": "delete",
    "url": "/api/v1/social/comment/:id",
    "title": "Delete a comment",
    "name": "DeleteComment",
    "description": "<p>This is where a comment on post is deleted.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Comment with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentIdNotProvided",
            "description": "<p>No comment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Comment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/social/post/:id",
    "title": "Delete a post",
    "name": "DeletePost",
    "description": "<p>This is where a social post is deleted</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/comment/:id",
    "title": "Get comment(s)",
    "name": "GetComment",
    "description": "<p>This is where a comment on post is retrieved.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Postresponse from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/post/:id",
    "title": "Get post(s)",
    "name": "GetPost",
    "description": "<p>This is where a social post(s) is retrieved</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>Postresponse from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \"postImage\": \"http://w............\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/post/like",
    "title": "Like a post",
    "name": "LikePost",
    "description": "<p>This is where a social post is liked</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "liker",
            "description": "<p>User id of the post liker.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post liked\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/remove",
    "title": "Terminate a friendship",
    "name": "Remove",
    "description": "<p>This is where a friendship is terminated or destroyed</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requester",
            "description": "<p>ID of the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestee",
            "description": "<p>ID of the requestee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Friendship terminated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesterIdNotProvided",
            "description": "<p>No Requester id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesteeIdNotProvided",
            "description": "<p>No Requestee id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requester id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requestee id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/request",
    "title": "Send a friend request",
    "name": "Request",
    "description": "<p>This is where the friend request is registered to the database</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requester",
            "description": "<p>ID of the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestee",
            "description": "<p>ID of the requestee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Friend request sent\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesterIdNotProvided",
            "description": "<p>No Requester id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequesteeIdNotProvided",
            "description": "<p>No Requestee id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requester id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Requestee id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/comment/search",
    "title": "Search for post(s)",
    "name": "SearchComment",
    "description": "<p>This is where a comment on post is searched.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchTerm",
            "description": "<p>Search term to be searched.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Number of search items per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "result",
            "description": "<p>Result of the search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Current page of the search result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of search items per page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"page\": \"1\",\n  \"limit\": \"50\",\n  \"result\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SearchTermNotProvided",
            "description": "<p>No search term provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No search term provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/social/post/search",
    "title": "Search for post(s)",
    "name": "SearchPost",
    "description": "<p>This is where a social post is searched.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchTerm",
            "description": "<p>Search term to be searched.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Current page of the search result.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Number of search items per page.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Current page of the search result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of search items per page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"page\": \"1\",\n  \"limit\": \"50\",\n  \"result\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SearchTermNotProvided",
            "description": "<p>No search term provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No search term provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/post/unlike",
    "title": "Unlike a post",
    "name": "UnlikePost",
    "description": "<p>This is where a social post is unliked</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "liker",
            "description": "<p>User id of the post liker.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post unliked\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/social/post",
    "title": "Update a comment",
    "name": "UpdateComment",
    "description": "<p>This is where a comment on post is updated.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment to be made on a post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Comment with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentIdNotProvided",
            "description": "<p>No comment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Comment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Comment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/social/post",
    "title": "Update a post",
    "name": "UpdatePost",
    "description": "<p>This is where a social post is updated.</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postText",
            "description": "<p>Text content of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postImage",
            "description": "<p>Url of images associated with the post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Post with id 59dce9d56b54d91c38847825 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostIdNotProvided",
            "description": "<p>No post id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>The id of the Post was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Post id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Post with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/social/upload",
    "title": "Upload an image",
    "name": "UploadImage",
    "description": "<p>This is where a social image is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/social/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/SocialController.js",
    "groupTitle": "Social"
  },
  {
    "type": "post",
    "url": "/api/v1/training/payment",
    "title": "Pay for a training",
    "name": "CreatePayment",
    "description": "<p>This is where a training payment is created.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to be paid for training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payer",
            "description": "<p>User id of the payer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "training",
            "description": "<p>Training id of the training beign paid for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>State/status of the payment. Must be any of 'pending', 'approved', 'denied', 'free'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9d56b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingIdNotProvided",
            "description": "<p>No Training id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingNotFound",
            "description": "<p>The Training was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PayerIdNotProvided",
            "description": "<p>No Payer id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AmountNotProvided",
            "description": "<p>No Amount provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Training id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Training with such id existing'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payer id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Amount provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/training",
    "title": "Create a new training",
    "name": "CreateTraining",
    "description": "<p>This is where a new training is created.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Full description of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fee",
            "description": "<p>Fee for the training.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingInfoNotComplete",
            "description": "<p>Training info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { title | banner | description | fee} provided!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training"
  },
  {
    "type": "delete",
    "url": "/api/v1/training/:id",
    "title": "Delete a training",
    "name": "DeleteTraining",
    "description": "<p>This is where a training is deleted</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Training Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Training with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingIdNotProvided",
            "description": "<p>No Training id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingNotFound",
            "description": "<p>The Training was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Training id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Training with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/training/:id",
    "title": "Get payment(s)",
    "name": "GetPayment",
    "description": "<p>This is where payments are retrieved.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Payment id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payment",
            "description": "<p>Payment response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/training/:id",
    "title": "Get training(s)",
    "name": "GetTraining",
    "description": "<p>This is where trainings are retrieved.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Training id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "training",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingNotFound",
            "description": "<p>The Training was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Training with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/training/payment/:id",
    "title": "Update a payment",
    "name": "UpdatePayment",
    "description": "<p>This is where a payment is updated.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the payment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>State/status of the payment. Must be any of 'pending', 'approved', 'denied', 'free'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Payment with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentIdNotProvided",
            "description": "<p>No Payment id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentNotFound",
            "description": "<p>The Payment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Payment id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Payment with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/training/:id",
    "title": "Update a training",
    "name": "UpdateTraining",
    "description": "<p>This is where a training is updated.</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "banner",
            "description": "<p>Cloud Url of Picture banner for the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Full description of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date/Duration of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "venue",
            "description": "<p>Venue of the training.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fee",
            "description": "<p>Fee for the training.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Training with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingIdNotProvided",
            "description": "<p>No Training id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingNotFound",
            "description": "<p>The Training was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No Training id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No Training with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/training/upload",
    "title": "Upload a training banner",
    "name": "UploadBanner",
    "description": "<p>This is where a training image banner is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "Training",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Banner image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/training/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrainingImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TrainingController.js",
    "groupTitle": "Training"
  },
  {
    "type": "post",
    "url": "/api/v1/projects/post",
    "title": "Create a new user",
    "name": "CreateUser",
    "description": "<p>This is where a new user is created.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the new user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the new user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm the password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Addresse of the business.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bizNature",
            "description": "<p>Nature of business.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Name of company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepName1",
            "description": "<p>Name of first company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepPhone1",
            "description": "<p>Phone number of first company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepEmail1",
            "description": "<p>Email of first company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepName2",
            "description": "<p>Name of second company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepPhone2",
            "description": "<p>Phonenumber of second company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyRepEmail2",
            "description": "<p>Email of second company representative.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tradeGroup",
            "description": "<p>Trade group of company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referrer1",
            "description": "<p>Email of first referrer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referrer2",
            "description": "<p>Email of second referrer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profileImage",
            "description": "<p>Profile image for the company/member.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"id\": \"59dce9c16b54d91c38847825\",\n  \"....\": \".....................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordNotMatch",
            "description": "<p>Password doesn't match, What a shame!.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserInfoNotComplete",
            "description": "<p>User info not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'Password doesn\\'t match, What a shame!'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No { title | banner | description } provided!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/user",
    "title": "Reject a user",
    "name": "DeleteUser",
    "description": "<p>This is where a user is deleted.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been deleted'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/user",
    "title": "Reject a user",
    "name": "DeleteUser",
    "description": "<p>This is where a user's info is updated.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be updated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been updated'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/:id",
    "title": "Get User(s)",
    "name": "GetUser_s_",
    "description": "<p>This is where users are retrieved.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/upload",
    "title": "Upload a profile image",
    "name": "UploadImage",
    "description": "<p>This is where a profile image is uploaded (Make sure image file extension is either jpg or png).</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Profile image file to be uploaded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"bannerUrl\": \"https://accicloud.blob.core.windows.net/user/27ba91b3-ab78-4240-aa6c-a1f32230227c.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotUploaded",
            "description": "<p>No image uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No image uploaded!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/social/verifier/:id",
    "title": "Get unverified user(s)",
    "name": "Get",
    "description": "<p>This is where unverified users are retrieved.</p>",
    "group": "Verifier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Post response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"59dce9d56b54d91c38847825\",\n  \".........\": \"....................\"\n   .................................\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/VerifierController.js",
    "groupTitle": "Verifier",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/verifier",
    "title": "Verify a user",
    "name": "Verify",
    "description": "<p>This is where a newly registered user is verified instead  of beign rejected.</p>",
    "group": "Verifier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be verified.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been verified'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/VerifierController.js",
    "groupTitle": "Verifier",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/verifier",
    "title": "Reject a user",
    "name": "Verify",
    "description": "<p>This is where a newly registered user is rejected instead of beign verified.</p>",
    "group": "Verifier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id of the the user to be verified.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the response from API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message response from API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"User with id 59dce9d56b54d91c38847825 has been rejected'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/VerifierController.js",
    "groupTitle": "Verifier",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIdNotProvided",
            "description": "<p>No User id provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"status\": \"error\",\n  \"err\": \"No User id provided!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": 'No User with such id existing'\n}",
          "type": "json"
        }
      ]
    }
  }
] });