const base = {
    get() {
        return {
            url : "http://localhost:8080/xsxuexiziliaotuijian/",
            name: "xsxuexiziliaotuijian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xsxuexiziliaotuijian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上学习资源智能推荐系统"
        } 
    }
}
export default base
