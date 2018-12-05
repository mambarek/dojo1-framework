#Internationalzation:
Der Ansatz von dojo mit i18n ist sehr statisch
man muss seine eigene Componente bauen die flexible resourcen ansprechen kann
Die Übersetzungen können auch vom backend kommen, resourcebundle oder DB

z.B. messagesManager oder Loader ....

messageManager.getMessage(bundleRefName, key){

    // dojo nls
    .. hier suchen und wert zurück geben
    
    // andere resourcen asprechen
    ...
    
    
    // client registery for caching
    ....

}

- Die Übersetzungen werden meistens durch externe auserhalb des Entwicklerteams gepflegt
z.B. vom Fachbereich da wie sieht das aus mit der Pflege bei i18n könnte Schwierig sein

z.B. war in WINGS das man die label on the fly ändern kann