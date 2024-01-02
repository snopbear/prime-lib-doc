import { createTableEmarsysEvent } from "@factories/create-table-property/create-emarsys-event-property";

export const emarsysEvents=[
    createTableEmarsysEvent("EmarsysCartCommand" ,"[event: 'cart', value: CartItem[]]" , 'Reports the list of items in the visitor’s shopping cart.','Issue this command on every page, even if the customer’s cart is empty.','You must reissue the cart and go commands each time the customer makes an update to the cart.'),

    createTableEmarsysEvent("EmarsysAvailabilityZoneCommand" ,"[event: 'availabilityZone', value: string]" , 'Sets the availability zone. Used in conjunction with the recommend command for websites which support localization.','Use this command on pages that request product recommendations using recommend (Predict Command), if your site has multiple availability zones.','N/A'),

    createTableEmarsysEvent("EmarsysCategoryCommand" ,"[event: 'category', category: string]" , 'Reports the category currently browsed by the visitor.','Issue this command on category pages only.','If you are using Predict services on a localized website, you still need to push the default category field value with this command.'),

    createTableEmarsysEvent("EmarsysDisplayCurrencyCommand" ,"[event: 'displayCurrency',currencyCode: string]" , 'Sets the display currency.','Issue this command on all pages of a website where the default currency needs to be overriden.','N/A'),

    createTableEmarsysEvent("EmarsysLanguageCommand" ,"[event: 'language', langCode: string]" , 'Sets the display language for Predict web recommender widgets, such as HOME and DEPARTMENT.','Issue this command on all relevant pages of a localized website.','N/A'),

    createTableEmarsysEvent("EmarsysPurchaseCommand" ,"[ event: 'purchase',descriptor: Descriptor]" , 'Reports a purchase event.','Issue this command on the checkout confirmation page.','This command should be only issued once for a given purchase. Emarsys does not check the submitted purchases for duplication.'),

    createTableEmarsysEvent("EmarsysSearchTermCommand" ,"[event: 'searchTerm', term: string]" , 'Reports search terms entered by the visitor.','Issue this command on the search results page.','N/A'),

    createTableEmarsysEvent("EmarsysSetCustomerIdCommand" ,"[event: 'setCustomerId',customerId: string]" , 'Reports your inhouse customer identifier for known visitors (logged in).','Issue this command (or the setEmail) on every page in the go command batch if the current visitor is identified.','The setEmail command is the default identification option, to which setCustomerId is an alternative. Do not mix usage of these two commands!'),

    createTableEmarsysEvent("EmarsysSetEmailCommand" ,"[event: 'setEmail', email: string]" , 'Reports the email address of known visitors. Known visitors incude users who are logged in, but also any interaction point where the email address is entered by visitor and recorded into Emarsys contact database, such as newsletter subscriptions, guest purchases.','Issue this (or the setCustomerId) command on every page in the go command batch if the visitor is logged in or identified.','This command is the default identification option, to which setCustomerId is an alternative. Do not mix usage of these two commands!'),

    createTableEmarsysEvent("EmarsysTestModeCommand" ,"['testMode']" , 'Disables logging for all commands contained in the current ScarabQueue object. In effect, this will prevent data-collection events from being recorded.','Use testMode command on your staging/test site to avoid test traffic from interfering with your live website data-collection (for example to prevent purchases on the test site from showing up in Site Traffic statistics).','testMode also prevents the Live Events tool from working. The Inspector tool will still work, you can use it for checking your JavaScript integration.'),

    createTableEmarsysEvent("EmarsysViewCommand" ,"[event: 'view', itemId: string]" , 'Reports a product view.','Issue this command on product pages.','N/A'),

    createTableEmarsysEvent("EmarsysIncludeCommand" ,`[
    event: 'include',
    field: string,
    comparison: 'is' | 'in' | 'has' | 'overlaps',
    expectation: string | Array<string>
    ]` , 'Adds an inclusion criterion for recommended items; more than one criteria can be specified by multiple include commands. An item is recommended only if it satisfies all criteria. Always used in conjunction with recommend (Predict Command).','Issue this command on pages where you use recommend (Predict Command).','The comparison only applies to the entire field value and is case sensitive. For example, if you want to exclude the field value 24/7™ Lace Full Coverage Bra, you must provide the whole field value exactly as it is spelled, no other strings (such as 24/7™ Lace or24/7™ lace full coverage bra) will produce a match.'),
    createTableEmarsysEvent("EmarsysExcludeCommand" ,`[
        event: 'exclude',
        field: string,
        comparison: 'is' | 'in' | 'has' | 'overlaps',
        expectation: string | Array<string>
    ]` , 'Defines an exclusion criterion for recommended items; more than one criteria can be specified by multiple exclude commands. An item will not be recommended if it satisfies all exclusion criteria. Always use it in conjunction with recommend (Predict Command).','Issue this command on pages where you use recommend (Predict Command).','The comparison only applies to the entire field value and is case sensitive. For example, if you want to exclude the field value 24/7™ Lace Full Coverage Bra, you must provide the whole field value exactly as it is spelled, no other strings (such as 24/7™ Lace or24/7™ lace full coverage bra) will produce a match.'),
]