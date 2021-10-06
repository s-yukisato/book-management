import { useHistory } from 'react-router-dom';


export const useRedirect = () => {
    const history = useHistory();

    const toHomePage = () => history.push("/");

    const toLibraryPage = () => history.push("/library");

    const toProjectsPage = () => history.push("/projects");

    const toCreateProjectPage = () => history.push("/project/new");

    const toProject = (id) => history.replace(`/projects/${id}`);

    const toThanksPage = () => history.push("/thanks");

    return { toHomePage, toLibraryPage, toProjectsPage, toCreateProjectPage, toProject, toThanksPage };
}