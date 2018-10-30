import firebase from 'firebase/app'
import Task from './task_help'

export default {
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'Ashes',
        'time': '100 hours',
        'description': 'Блестящий, но одержимый профессор, работает над изобретениелжен остановить инфекцию прежде, чем она погубит его, и тех кого он любит.',
        'whatWatch': 'Film',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Breaking Bad',
        'description': 'Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёго исключённого из школы при активном содействии Уайта. Пинкман сам занимался «варкой мета», но накануне, в ходе рейда УБН, он лишился подельника и лаборатории…',
        'whatWatch': 'Serial',
        'completed': true,
        'editing': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    async newTask ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newTask = new Task(
          payload.title,
          payload.description,
          payload.whatWatch,
          payload.time,
          payload.tags,
          payload.completed,
          payload.editing,
          getters.user.id
        )
        const task = await firebase.database().ref('tasks').push(newTask)
        console.log(task)

        commit('newTask', payload)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      payload.id = Math.random()
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    },
    taskCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed
      })
    },
    taskNotCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}
