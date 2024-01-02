import { createTableProperty } from "@factories/index";

export const interfacesTabView = {
    tableColumn: [
      createTableProperty('header', 'string', 'Sets tab view header text'),
      createTableProperty('leftIcon?', 'string', 'Icon class to be placed on left side of header text'),
      createTableProperty('rightIcon?', 'string', 'Icon class to be placed on right side of header text'),
      createTableProperty('headerStyleClass?', 'string', 'External styling class for header tab'),
    ],
  };