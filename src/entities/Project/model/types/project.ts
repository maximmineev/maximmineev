export enum Technologies {
    HTML = 'html',
    CSS = 'css',
    SASS = 'sass',
    PYTHON = 'python',
    TYPESCRIPT = 'typescript',
    REACT = 'react',
    VUE = 'vue',
    CSHARP = 'csharp',
    PHP = 'php',
    REACT_NATIVE = 'react native',
    MYSQL = 'mysql',
    JAVASCRIPT = 'javascript',
    VITE = 'vite',
    ESLINT = 'eslint',
    WEBSOCKETS = 'websockets',
    REDUX = 'redux',
    REDUX_TOOLKIT = 'redux toolkit',
}

export enum ProjectType {
    EDUCATION = 'Учебный',
    COMMERCIAL = 'Коммерческий',
}

export enum ProjectRole {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    TEAMLEAD = 'TeamLead',
    ANALYST = 'Analyst',
}

export interface Project {
    id: string;
    cover?: string;
    title?: string;
    description?: string;
    images?: string[];
    createdAt?: string;
    technologies?: Technologies[];
    type: ProjectType;
    links?: string[];
    roles?: ProjectRole[];
    duties?: string[];
    githubLink?: string;
    websiteLink?: string;
    isTeamProject?: boolean;
}

export interface ProjectSchema {
    project?: Project;
    error?: string;
    isLoading?: boolean;
}
