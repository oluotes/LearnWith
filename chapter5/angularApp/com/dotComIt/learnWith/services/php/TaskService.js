/**
 * Created by jhouser on 5/12/2016.
 */

angular.module('learnWith').service('TaskService', ['$http','$filter',function($http,$filter){

    var servicePrefix = '../php/'

    var services = {
        loadTasks : loadTasks,
        loadTaskCategories : loadTaskCategories,
        updateTask : updateTask
    }
    return services;

    function loadTasks(taskFilter){
        var url = servicePrefix + 'com/dotComIt/learnWith/api/tasks/';
        var concatenator = "?";

        if ((taskFilter.completed !== null) && (typeof taskFilter.completed !== "undefined")) {
            url += concatenator + "completed=" + taskFilter.completed;
            concatenator = "&";
        }
        if (taskFilter.endDate) {
            url += concatenator + "endDate=" + $filter('date')(taskFilter.endDate, "shortDate");
            concatenator = "&";
        }
        if (taskFilter.scheduledEndDate) {
            url += concatenator + "scheduledEndDate=" + $filter('date')(taskFilter.scheduledEndDate, "shortDate");
            concatenator = "&";
        }
        if (taskFilter.scheduledStartDate) {
            url += concatenator + "scheduledStartDate=" + $filter('date')(taskFilter.scheduledStartDate, "shortDate");
            concatenator = "&";
        }
        if (taskFilter.scheduledEqualDate) {
            url += concatenator + "scheduledEqualDate=" + $filter('date')(taskFilter.scheduledEqualDate, "shortDate");
            concatenator = "&";
        }

        if (taskFilter.startDate) {
            url += concatenator + "startDate=" + $filter('date')(taskFilter.startDate, 'shortDate');
            concatenator = "&";
        }
        if (taskFilter.taskCategoryID) {
            url += concatenator + "taskCategoryID=" + taskFilter.taskCategoryID;
            concatenator = "&";
        }

        return $http.get(url);

    };

    function loadTaskCategories(){
        return $http.get(servicePrefix + 'com/dotComIt/learnWith/api/taskCategories/' )
    };



    function createTask_internal(task, user) {
        var parameters = {
            taskCategoryID: task.taskCategoryID,
            description: task.description,
            userID : user.userID
        };

       return $http.post(servicePrefix + 'com/dotComIt/learnWith/api/task/', parameters);
    }

    function updateTask_internal(task) {
        var parameters = {
            taskID: task.taskID,
            taskCategoryID: task.taskCategoryID,
            description: task.description
        }
        return $http.put(servicePrefix + 'com/dotComIt/learnWith/api/task/', parameters);
    }


    function updateTask(taskVO, user){
        if(!(typeof taskVO.taskCategoryID === 'number' )){
            taskVO.taskCategoryID = 0;
        }
        if (taskVO.taskID) {
            return updateTask_internal(taskVO);
        } else {
            return createTask_internal(taskVO, user);
        }

    }

}]);
