/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

//CKEDITOR.editorConfig = function( config ) {
//	// Define changes to default configuration here. For example:
//	// config.language = 'fr';
//	// config.uiColor = '#AADC6E';
//};

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.
//    config.toolbarGroups = [
////            { name: 'editing'},
//            { name: 'paragraph',   groups: [ 'indent', 'align' ] },
//            { name: 'edit' },
//    ];
//

    config.language = 'vi';
    config.entities = false;
    config.basicEntities = false;
    config.entities_greek = false;
    config.entities_latin = false;
    config.removePlugins = 'elementspath';

    config.toolbar = [['Bold', 'Italic', 'Underline', '-', 'RemoveFormat'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['NumberedList', 'BulletedList'], ['FontSize', 'TextColor', 'BGColor']],

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    config.removeButtons = 'Subscript,Superscript';

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';

    config.enterMode = CKEDITOR.ENTER_BR;

    config.allowedContent = true;
//    config.extraPlugins = 'colorbutton,colordialog';

//    config.fontSize_defaultLabel = '12';
//    config.colorButton_colors = 'CF5D4E,454545,FFF,CCC,DDD,CCEAEE,66AB16';
    config.colorButton_enableMore = false;
};

//CKEDITOR.stylesSet.add( 'default', [
//    {
//        attributes: {
//            style: 'padding: 25px; margin-right: 25px',
//            border: '2',
//            align: 'left'
//        }
//    }
//] );