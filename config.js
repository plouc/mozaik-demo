var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        }
    },

    // define duration between each dashboard rotation (ms)
    // rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [
        // dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    // set my giyhub name, see my info and my profile thumb
                    user: 'valeriosillari',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
