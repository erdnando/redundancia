export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'dashboard',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Validaciones',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    to: {
      name: 'validaciones',
    },
  }, {
    title: 'Equipos',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'equipos',
    },
  }, {
    title: 'Endpoints',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'endpoints',
    },
  }, {
    title: 'Usuarios',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'usuarios',
    },
  }, {
    title: 'Roles',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'roles',
    },
  }, {
    title: 'Historial',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'historial',
    },
  }];
}
