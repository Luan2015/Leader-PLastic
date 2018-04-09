# -*- coding: utf-8 -*-
# -------------------------------------------------------------------------
# This is a sample controller
# this file is released under public domain and you can use without limitations
# -------------------------------------------------------------------------

@auth.requires_login()
def usuarios():
	response.title = T("Usuarios")
	pl_users = db.auth_user
	pl_users.id.redable =  pl_users.id.writetable  = False				
	links =  []
	pl_usuarios = SQLFORM.grid(pl_users,links=links,searchable=False,details=False,csv=False)
	return locals()