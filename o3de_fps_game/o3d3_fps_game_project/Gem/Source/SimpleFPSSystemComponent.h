
#pragma once

#include <AzCore/Component/Component.h>

#include <SimpleFPS/SimpleFPSBus.h>

namespace SimpleFPS
{
    class SimpleFPSSystemComponent
        : public AZ::Component
        , protected SimpleFPSRequestBus::Handler
    {
    public:
        AZ_COMPONENT_DECL(SimpleFPSSystemComponent);

        static void Reflect(AZ::ReflectContext* context);

        static void GetProvidedServices(AZ::ComponentDescriptor::DependencyArrayType& provided);
        static void GetIncompatibleServices(AZ::ComponentDescriptor::DependencyArrayType& incompatible);
        static void GetRequiredServices(AZ::ComponentDescriptor::DependencyArrayType& required);
        static void GetDependentServices(AZ::ComponentDescriptor::DependencyArrayType& dependent);

        SimpleFPSSystemComponent();
        ~SimpleFPSSystemComponent();

    protected:
        ////////////////////////////////////////////////////////////////////////
        // SimpleFPSRequestBus interface implementation

        ////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////
        // AZ::Component interface implementation
        void Init() override;
        void Activate() override;
        void Deactivate() override;
        ////////////////////////////////////////////////////////////////////////
    };
}
