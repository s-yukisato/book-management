import { useHistory } from 'react-router-dom';


export const useRedirect = () => {
    const history = useHistory();

    const toHomePage = () => history.push("/");

    const toLibraryPage = () => history.push("/library");

    const toProjectsPage = () => history.push("/projects");

    const toCreateProjectPage = () => history.push("/projects/new");

    const toProject = (id) => history.push(`/project/${id}`);

    const toProjectReplace = (id) => history.replace(`/project/${id}`);

    const toSignInPage = () => history.push("/signin");

    const toSignUpPage = () => history.push("/signup");

    const toThanksPage = () => history.push("/thanks");

    return {
        toHomePage,
        toLibraryPage,
        toProjectsPage,
        toCreateProjectPage,
        toProject,
        toProjectReplace,
        toSignInPage,
        toSignUpPage,
        toThanksPage
    };
}