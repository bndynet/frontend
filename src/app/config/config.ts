import { IAppConfigInfo } from '../app.config';

export const config: IAppConfigInfo = {
  infoDuration: 2000,
  successDuration: 1000,
  warningDuration: 3000,
  errorDuration: 0,
  editorOptions: {
    height: 200,
    charCounterCount: true,
    toolbarButtons: [
      'fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
      'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
      'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
      'insertLink', 'insertImage',
      // 'insertVideo', 'insertFile',
      'embedly', 'insertTable', '|',
      'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
      'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],

    imageUploadMethod: 'POST',
    imageUploadURL: '/upload_image',
    imageUploadParam: 'frontend',
    imageUploadParams: { author: 'Bendy Zhang', email: 'zb@bndy.net'},
    imageMaxSize: 5 * 1024 * 1024, // 5MB
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'bmp'],
    imageManagerLoadURL: '', // should return [{ url, thumb, tag }] for WYSIWYG Editor

    fileAllowedTypes: ['*'], // example: ['application/pdf', 'application/msword'],
    fileMaxSize: 10 * 1024 * 1024,
    fileUploadMethod: 'POST',
    fileUploadParam: '',
    fileUploadParams: {},
    fileUseSelectedText: true,
    fileUploadURL: '/upload_file',
  }
};
