export class LoginModel {
    username: string;
    password: string;
}

export interface ListUsersModel {
    id: number;
    number: number;
    username: string;
    name: string;
    email: string;
    last_login?: string;
    Edit?: string;
    Delete?: string;
}

export interface ListGroupsModel {
    number: number;
    name: string;
    Edit: string;
    Delete: string;
}

export interface ListTowerModel {
    number: number;
    id: number; 
    name: string;
    Edit: string;
    Delete: string;
}

export interface ListViewModel {
    number?: number;
    view_in_english: string;
    view_in_spanish: string;
    approval: boolean;
    see: boolean;
    delete: boolean;
    edit: boolean;
    admin: boolean;
}

export interface ListCaseChartModel {
    number?: number;
    tower?: string;
    unfulfilled_amount?: number;
    fulfilled_amount?: number;
}

export interface ListCommittedplans {
    number: number;
    id: number;
    description?: string;
    tower?: string;
    name?: string;
    observations?: string;
    percentagecommitted?: number;
    percentagecomplete?: number;
    open_date?: string;
    Edit?: string;
    Delete?: string;
}

export interface ListActivityModel {
    number?: number;
    id?: number;
    username?: string;
    message?: string;
    date?: string;
}

export interface ListCasesModel {
    number: number;
    numberCase?: string;
    affected_ci?: string;
    type_case?: string;
    affected_service?: string;
    assignee?: string;
    assignment_group?: string;
    tower?: string;
    attention_fulfilled?: string;
    attention_time?: number;
    category?: string;
    close_date?: string;
    closed_by?: string;
    closure_code?: string;
    clr_responsable?: string;
    complies_or_does_not_comply?: Boolean;
    complies_or_does_not_comply_modify?: Boolean;
    complies_or_does_not_comply_before?: Boolean;
    id: number;
    id_department?: number;
    major_incident?: Boolean;
    model?: string;
    new_category?: string;
    observations?: string;
    open_by?: string;
    open_date?: string;
    operation?: string;
    phase?: string;
    priority?: string;
    re_open?: Boolean;
    re_open_by?: string;
    relation_case?: string;
    resolved_by?: string;
    resolved_group?: string;
    resolved_time?: string;
    solution_fulfilled?: string;
    solution_time?: number;
    status?: string;
    subcategory?: string;
    titule?: string;
    Edit?: string;
    Delete?: string;
}

export interface ListPermissionsModel {
    number: number;
    id: number; 
    name: string;
    Edit: string;
    Delete: string;
}

export interface ListRolesModel {
    number: number;
    id: number; 
    name: string;
    Edit: string;
    Delete: string;
}

export interface ListDepartmentsModel {
    number: number;
    id: number; 
    name: string;
    tower: string;
    Edit: string;
    Delete: string;
}

export interface ListOperationsModel {
    number: number;
    id: number; 
    name: string;
    Edit: string;
    Delete: string;
}

export interface ListHoursModel {
    number: number;
    id: number; 
    cod_user: string;
    name_user: string;
    number_case: string;
    initial_date: string;
    approval: string;
    Edit: string;
    Delete: string;
}

/**
 * Interface para Formularios
 */
export interface ListFormsModel {
    name: string;
    description: string;
}
