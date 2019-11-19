exports.eventInsertBlackListed = {
  Records: [
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'BLACKLISTED',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventInsertMember = {
  Records: [
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'MEMBER',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventInsertAdmin = {
  Records: [
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'ADMIN',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventInsertOther = {
  Records: [
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'OTHER',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventInsertMultipleBlackListed = {
  Records: [
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'BLACKLISTED',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
    {
      eventID: '127a524ff3ae5713921d6f6c7445fff9',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204925,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        NewImage: {
          phone: {
            S: '+48606245240',
          },
          type: {
            S: 'BLACKLISTED',
          },
        },
        SequenceNumber: '3974900000000059091876430',
        SizeBytes: 49,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventModifyAdmin = {
  Records: [
    {
      eventID: '8e89affb6c05f0eb0cc466a20f235804',
      eventName: 'MODIFY',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568199782,
        Keys: {
          phone: {
            S: '+48002',
          },
        },
        NewImage: {
          phone: {
            S: '+48002',
          },
          type: {
            S: 'ADMIN',
          },
        },
        SequenceNumber: '3105900000000049991333157',
        SizeBytes: 31,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventModifyBlacklisted = {
  Records: [
    {
      eventID: '8e89affb6c05f0eb0cc466a20f235804',
      eventName: 'MODIFY',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568199782,
        Keys: {
          phone: {
            S: '+48002',
          },
        },
        NewImage: {
          phone: {
            S: '+48002',
          },
          type: {
            S: 'BLACKLISTED',
          },
        },
        SequenceNumber: '3105900000000049991333157',
        SizeBytes: 31,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventRemove = {
  Records: [
    {
      eventID: '80dd96205a26abd6054dcdc85628ed58',
      eventName: 'REMOVE',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204774,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        SequenceNumber: '3974800000000059091760467',
        SizeBytes: 17,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventOther = {
  Records: [
    {
      eventID: '80dd96205a26abd6054dcdc85628ed58',
      eventName: 'OTHER',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'eu-west-1',
      dynamodb: {
        ApproximateCreationDateTime: 1568204774,
        Keys: {
          phone: {
            S: '+48606245240',
          },
        },
        SequenceNumber: '3974800000000059091760467',
        SizeBytes: 17,
        StreamViewType: 'NEW_IMAGE',
      },
      eventSourceARN:
        'arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-chng/stream/2019-09-10T15:36:41.378',
    },
  ],
};

exports.eventWrong = {
  Record: [{}],
};
