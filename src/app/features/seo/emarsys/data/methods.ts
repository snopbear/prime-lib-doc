import { createTableMethod } from "@factories/index"


export const emarsysMethods=[
    createTableMethod(
        'addEmarsysScript',
        'Loads emarsys script in html document',
        '(emarsysUrl: string):void',
        'emarsysUrl url of script to be loaded'
      ),
      createTableMethod(
        'go',
        'Adds emarsys go command to ScarabQueue',
        '():void'
      ),
      createTableMethod(
        'addEmarsysEvent',
        'Adds a new event to ScarabQueue when a certain action gets performed',
        '(event: EmarsysCommand): void',
        'event Event to be added to ScarabQueue'
      )
]
    

