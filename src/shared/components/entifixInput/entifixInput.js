(function () {
    'use strict';
   
    function componentcontroller($filter)
    {
        var vm = this;
        var randomNumber = Math.floor((Math.random() * 100) + 1);

        //Fields and Properties__________________________________________________________________________________________________________________________________________________ 
        //=======================================================================================================================================================================
        //Label - Input Behavior
        vm.canShowEditableFields =
        {
            get: () =>
            {
                if (vm.showEditableFields)
                    return vm.showEditableFields();

                return false;
            }
        };

        //Error Behavior with ng-messages
        vm.canEvaluateErrors =
        {
            get: () =>
            {
                if (vm.evaluateErrors)
                    return vm.evaluateErrors( { name: vm.name.get() } );

                return false;
            }
        };
        
        //Error validations
        vm.isRequired =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.isRequired)
                    return vm.componentConstruction.isRequired;

                //Default value
                return false;
            }
        };
        
        vm.requiredMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.requiredMessage)
                {
                    if (vm.componentConstruction.requiredMessage.getter)
                        return vm.componentConstruction.requiredMessage.getter();
                    
                    if (vm.componentConstruction.requiredMessage.text)
                        return vm.componentConstruction.requiredMessage.text;
                }

                //Default value
                return 'Este campo es obligatorio';
            }
        };
        
        vm.maxLength =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.maxLength)
                    return vm.componentConstruction.maxLength;

                //Default value
                return null;
            }
        };
        
        vm.maxLengthMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.maxLengthMessage)
                {
                    if (vm.componentConstruction.maxLengthMessage.getter)
                        return vm.componentConstruction.maxLengthMessage.getter();
                    
                    if (vm.componentConstruction.maxLengthMessage.text)
                        return vm.componentConstruction.maxLengthMessage.text;
                }

                //Default value
                return 'El texto es demasiado largo';
            }
        };
        
        vm.minLength =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.minLength)
                    return vm.componentConstruction.minLength;

                //Default value
                return null;
            }
        };
        
        vm.minLengthMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.minLengthMessage)
                {
                    if (vm.componentConstruction.minLengthMessage.getter)
                        return vm.componentConstruction.minLengthMessage.getter();
                    
                    if (vm.componentConstruction.minLengthMessage.text)
                        return vm.componentConstruction.minLengthMessage.text;
                }

                //Default value
                return 'El texto es demasiado corto';
            }
        };
        
        vm.emailMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.emailMessage)
                {
                    if (vm.componentConstruction.emailMessage.getter)
                        return vm.componentConstruction.emailMessage.getter();
                    
                    if (vm.componentConstruction.emailMessage.text)
                        return vm.componentConstruction.emailMessage.text;
                }

                //Default value
                return 'Ingrese una dirección de correo válida';
            }
        };
        
        vm.urlMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.urlMessage)
                {
                    if (vm.componentConstruction.urlMessage.getter)
                        return vm.componentConstruction.urlMessage.getter();
                    
                    if (vm.componentConstruction.urlMessage.text)
                        return vm.componentConstruction.urlMessage.text;
                }

                //Default value
                return 'Ingrese una dirección URL válida';
            }
        };
        
        vm.numberMessage =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.numberMessage)
                {
                    if (vm.componentConstruction.numberMessage.getter)
                        return vm.componentConstruction.numberMessage.getter();
                    
                    if (vm.componentConstruction.numberMessage.text)
                        return vm.componentConstruction.numberMessage.text;
                }

                //Default value
                return 'Ingrese una número válido';
            }
        };

        vm.title = 
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.title)
                {
                    if (vm.componentConstruction.title.getter)
                        return vm.componentConstruction.title.getter();
                    
                    if (vm.componentConstruction.title.text)
                        return vm.componentConstruction.title.text;
                }

                //Default value
                return '';
            }
        };
         
        vm.name = 
        {
            get: () =>
            {
                if (getCleanedString(vm.title.get()) != '')
                    return getCleanedString(vm.title.get())
                return 'entifixinput' + randomNumber;
            }
        };
         
        vm.isTextArea = 
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.isTextArea)
                    return true;

                //Default value
                return false;
            }
        };
         
        vm.type = 
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.type)
                    return vm.componentConstruction.type;

                //Default value
                return 'text';
            }
        };
        
        vm.isForm =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.isForm != null)
                    return vm.componentConstruction.isForm;

                //Default value
                return true;
            }
        };
        
        vm.rows =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.rows)
                    return vm.componentConstruction.rows;

                //Default value
                return 1;
            }
        };

        vm.tooltip = 
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.tooltip)
                {
                    if (vm.componentConstruction.tooltip.getter)
                        return vm.componentConstruction.tooltip.getter();
                    
                    if (vm.componentConstruction.tooltip.text)
                        return vm.componentConstruction.tooltip.text;
                }

                //Default value
                return null;
            }
        };

        vm.modelOptions =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.modelOptions)
                    return vm.componentConstruction.modelOptions;

                return {};
            }
        }

        vm.numberValidation =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.numberValidation)
                    return vm.componentConstruction.numberValidation;

                return false;
            }
        }

        vm.format =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.format)
                    return vm.componentConstruction.format;

                return null;
            }
        }

        vm.currency =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.currency)
                    return vm.componentConstruction.currency;

                return '';
            }
        }

        vm.nullValueLabel =
        {
            get: () =>
            {
                if (vm.componentConstruction && vm.componentConstruction.nullValueLabel)
                    return vm.componentConstruction.nullValueLabel;
                
                return 'SIN REGISTROS';
            }
        }
        //=======================================================================================================================================================================



        //Methods________________________________________________________________________________________________________________________________________________________________ 
        //=======================================================================================================================================================================

        vm.$onInit = function()
        {
            if (vm.init)
                vm.init();
        };

        vm.runOnChangeTrigger = function()
        {
            if (vm.onChange)
                vm.onChange({ value: vm.valueModel });
        }

        function getCleanedString(stringToClean){
            var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

            for (var i = 0; i < specialChars.length; i++) 
                stringToClean= stringToClean.replace(new RegExp("\\" + specialChars[i], 'gi'), '');

            stringToClean = stringToClean.toLowerCase();
            stringToClean = stringToClean.replace(/ /g,"");
            stringToClean = stringToClean.replace(/á/gi,"a");
            stringToClean = stringToClean.replace(/é/gi,"e");
            stringToClean = stringToClean.replace(/í/gi,"i");
            stringToClean = stringToClean.replace(/ó/gi,"o");
            stringToClean = stringToClean.replace(/ú/gi,"u");
            stringToClean = stringToClean.replace(/ñ/gi,"n");
            return stringToClean;
        }

        vm.getDisplay = function()
        {
            if (vm.valueModel)
            {
                if (vm.format.get())
                    return $filter(vm.format.get())(vm.valueModel, vm.currency.get());
                return vm.valueModel;
            }
            else
                return vm.nullValueLabel.get();
        }
 
        //=======================================================================================================================================================================


        
    };

    componentcontroller.$inject = ['$filter'];

    var component = 
    {
        bindings: 
        {
            valueModel: '=',
            showEditableFields: '&',
            evaluateErrors: '&',
            componentConstruction: '<',
            onChange: '&'
        },
        templateUrl: 'src/shared/components/entifixInput/entifixInput.html',
        controller: componentcontroller,
        controllerAs: 'vm'
    };

    angular.module('entifix-js').component('entifixInput', component);

})();