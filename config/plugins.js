
module.exports = ({ env }) => {
    return {
      // upload: {
      //   config: {
      //     provider: 'aws-s3',
      //     providerOptions: {
      //       accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIAXEXE3STWJ5W7OIUL'),
      //       secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
      //       region: env('AWS_REGION', 'ap-south-1'),
      //       params: {
      //         Bucket: env('AWS_BUCKET', 'pushsend-strapi'),
      //       },
    
      //     },
      //     actionOptions: {
      //       upload: {},
      //       uploadStream: {},
      //       delete: {},
      //     },
      //   },
      // },
      ckeditor: {
        enabled: true,
        config: {
          plugin: {
            // disable data-theme tag setting //
            // setAttribute:false,
            // disable strapi theme, will use default ckeditor theme //
            // strapiTheme:false,
            // styles applied to editor container (global scope) //
            // styles:`
            // .ck.ck-editor__main .ck-focused{
            //   max-height: 700px;
            // }
            // :root{
            //   --ck-color-focus-border:red;
            //   --ck-color-text:red;
            // }
            // `
          },
          editor: {
            // editor default config
            // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
            // if you need markdown support and output set: removePlugins: [''],
            // default is
            // removePlugins: ['Markdown'],
            // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
            toolbar: {
              items: [
                "paragraph",
                "heading1",
                "heading2",
                "|",
                "bold",
                "italic",
                "fontColor",
                "fontBackgroundColor",
                "fontFamily",
                "underline",
                "fontSize",
                "removeFormat",
                "|",
                "bulletedList",
                "todoList",
                "numberedList",
                "|",
                "alignment",
                "outdent",
                "indent",
                "horizontalLine",
                "|",
                "StrapiMediaLib",
                "insertTable",
                "blockQuote",
                "mediaEmbed",
                "link",
                "highlight",
                "|",
                "htmlEmbed",
                "sourceEditing",
                "code",
                "codeBlock",
                "|",
                "subscript",
                "superscript",
                "strikethrough",
                "specialCharacters",
                "|",
                "heading",
                "fullScreen",
                "undo",
                "redo",
                "linehight",
              ],
            },
            // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
            fontSize: {
              options: [
                9,
                11,
                13,
                "default",
                16,
                17,
                18,
                19,
                20,
                21,
                24,
                27,
                30,
                35,
                36,
                48,
              ],
              supportAllValues: false,
            },
            fontFamily: {
              options: [
                "default",
                "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
                "Courier New, Courier, monospace",
                "Georgia, serif",
                "Lucida Sans Unicode, Lucida Grande, sans-serif",
                "Tahoma, Geneva, sans-serif",
                "Times New Roman, Times, serif",
                "Trebuchet MS, Helvetica, sans-serif",
                "Verdana, Geneva, sans-serif",
                "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
              ],
              supportAllValues: true,
            },
            fontColor: {
                colors: [
                    {
                        color: '#77bb41',
                        label: 'Green'
                    },
                    {
                        color: 'hsl(0, 0%, 30%)',
                        label: 'Dim grey'
                    },
                    {
                        color: 'hsl(0, 0%, 60%)',
                        label: 'Grey'
                    },
                    {
                        color: 'hsl(0, 0%, 90%)',
                        label: 'Light grey'
                    },
                    {
                        color: 'hsl(0, 0%, 100%)',
                        label: 'White',
                        hasBorder: true
                    },
                    // More colors.
                    // ...
                ],
              columns: 5,
              documentColors: 10,
            },
            fontBackgroundColor: {
              columns: 5,
              documentColors: 10,
            },
            // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
            // default language: 'en',
            // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
            image: {
              resizeUnit: "%",
              resizeOptions: [
                {
                  name: "resizeImage:original",
                  value: null,
                  icon: "original",
                },
                {
                  name: "resizeImage:25",
                  value: "25",
                  icon: "small",
                },
                {
                  name: "resizeImage:50",
                  value: "50",
                  icon: "medium",
                },
                {
                  name: "resizeImage:75",
                  value: "75",
                  icon: "large",
                },
              ],
              toolbar: [
                "toggleImageCaption",
                "imageTextAlternative",
                "imageStyle:inline",
                "imageStyle:block",
                "imageStyle:side",
                "linkImage",
                "resizeImage:25",
                "resizeImage:50",
                "resizeImage:75",
                "resizeImage:original",
              ],
            },
            // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
            table: {
              contentToolbar: [
                "tableColumn",
                "tableRow",
                "mergeTableCells",
                "tableCellProperties",
                "tableProperties",
                "toggleTableCaption",
              ],
            },
            // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "ck-heading_paragraph",
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "Heading 1",
                  class: "ck-heading_heading1",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2",
                  class: "ck-heading_heading2",
                },
                {
                  model: "heading3",
                  view: "h3",
                  title: "Heading 3",
                  class: "ck-heading_heading3",
                },
                {
                  model: "heading4",
                  view: "h4",
                  title: "Heading 4",
                  class: "ck-heading_heading4",
                },
              ],
            },
            // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
            // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
            htmlSupport: {
              allow: [
                {
                  name: "img",
                  attributes: {
                    sizes: true,
                    loading: true,
                  },
                },
              ],
            },
          },
        },
      },
    };
  };

  module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
              user: '80c58227315c70',
              pass: 'e8057f9deb0292'
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'gamatam.vajintha@zysk.tech',
          defaultReplyTo: 'gamatam.vajintha@zysk.tech',
        },
      },
    },
    // 
  });