module Wakey {
    export class Template {
        private static _instance: Template = new Template();
        private baseUrl: string;
        constructor(args?: any) {
            if (Template._instance) {
                throw new Error("Error: Instantiation failed: Use Template.getInstance() instead of new.");
            }
            Template._instance = this;
        }
        public static getInstance(): Template {
            return Template._instance;
        }
        public static getBaseViewTemplate(): string {
            var template = "";
            template += "<div id='wrapper-base'>";
            template +=     "<div id='wrapper-header'>";
            template +=     "<div id='toggle-menu' class='col-xs-3 row-full'><i class='fa fa-bars fa-3x hightlight-color fa-lineheight-3x fa-inset-shadow'></i></div>";
            template +=     "<div class='col-xs-9 row-full'>";
            template +=         "<div id='display-time' class='time'></div>";
            template +=         "<div id='display-date' class='date'></div>";
            template +=     "</div>";
            template +=     "</div>";
            template +=     "<div id='wrapper-body'>";
            template +=     "<div id='display-body'>";
            template += "<div id='display-menu'>";
            template += "<table><tr><td><div class='col-xs-4 row-full'><i class='fa fa-clock-o fa-2x hightlight-color fa-lineheight-2x fa-inset-shadow'> Alarms</i></td>";
            template += "</div>"; 
            template += "<td><div class='col-xs-4 row-full'><i class='fa fa-user fa-2x hightlight-color fa-lineheight-2x fa-inset-shadow'> Contacts</i></td></tr>";             
            template += "</div>";
            template += "<tr><td><div class='col-xs-4 row-full'><i class='fa fa-users fa-2x hightlight-color fa-lineheight-2x fa-inset-shadow'> Social</i></td>";
            template += "</div>";
            template += "<td><div class='col-xs-4 row-full'><i class='fa fa-cog fa-2x hightlight-color fa-lineheight-2x fa-inset-shadow'> Settings</i></td></tr>";
            template += "</div>";
            template += "<tr><td align='center' colspan='2'><div class='col-xs-4 row-full'><i class='fa fa-sign-out fa-2x hightlight-color fa-lineheight-2x fa-inset-shadow'> Logout</i></td></tr>";
            template += "</div>";
            template +=         "</div>";
            template +=     "</div>";
            template +=     "</div>";
            template += "</div>";
            template += "<div id='wall-base-left'></div>";
            template += "<div id='wall-base-right'></div>";
            return template;
        }
    }
}