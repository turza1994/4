// import axios from 'axios';
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid';

const state = {
    allPosts: [
        {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        category: 'unknown'
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        category: 'unknown'
      }
    ],

    categories: [
        {
            id: 3,
            title: 'hello'
        },
        {
            id: 4,
            title: 'hi'
        },
        {
            id: 5,
            title: 'welcome'
        }
    ]

};

const getters = {
    posts: (state) => state.allPosts,
    categories: (state) => state.categories
};

const actions = {

    addPost({ commit }, post){
        
        post.id = uuidv4(),
        post.category = 'unknown'

        commit('addPost', post);
    },

    updatePost({commit}, post){
        post.category = 'unknown'
        console.log(post)
        commit('updatePost', post);
    },

    deletePost({commit}, id){
        commit('deletePost', id)
    },

    addCategory({ commit }, category){
        
        category.id = uuidv4(),

        commit('addCategory', category);
    }
};

const mutations = {
    addPost: (state, post)=>{state.allPosts.unshift(post)},

    updatePost: (state, post) => {
        state.allPosts.map((cv, i) => {
            if(cv.id == post.id){
                state.allPosts[i] = post;
                Vue.set(state.allPosts, i, post)
                console.log(state.allPosts[i], post)
            }
        })
    },

    deletePost: (state, id) => {state.allPosts=state.allPosts.filter(cv => cv.id != id)},
    
    addCategory: (state, category)=>{state.categories.unshift(category)},

};

export default {
    state,
    getters,
    actions,
    mutations
}