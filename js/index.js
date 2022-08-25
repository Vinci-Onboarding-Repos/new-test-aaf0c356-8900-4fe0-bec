 
const BASE_URL = 'https://us-central1-vinci-dev-6e577.cloudfunctions.net/api/public';
const PROJECT_ID = 'new-test-aaf0c356-8900-4fe0-bec'
const fetchUsers = () => {
    console.log(window.location.href.split('/')[window.location.href.split('/').length - 1]);
    console.log(window.location.href);
    axios.get(BASE_URL, {
        params: {
            url: window.location.href,
            API_KEY: 'VINCI_DEV_6E577'
        },headers: {"Access-Control-Allow-Origin": "*"}
    })
        .then(response => {
            const users = response.data.data;
        })
        .catch(error => console.error(error));
};

const logPageView = () => {
    if (PROJECT_ID === "{{projectId}}") return;
    axios.post(BASE_URL + '/onboardingview', {
        projectId: PROJECT_ID,
        requestURL: window.location.href,
        API_KEY: 'VINCI_DEV_6E577'
    });
}

logPageView();

