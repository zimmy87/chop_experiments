
#include <AzCore/Serialization/SerializeContext.h>

#include "SimpleFPSSystemComponent.h"

#include <SimpleFPS/SimpleFPSTypeIds.h>

namespace SimpleFPS
{
    AZ_COMPONENT_IMPL(SimpleFPSSystemComponent, "SimpleFPSSystemComponent",
        SimpleFPSSystemComponentTypeId);

    void SimpleFPSSystemComponent::Reflect(AZ::ReflectContext* context)
    {
        if (auto serializeContext = azrtti_cast<AZ::SerializeContext*>(context))
        {
            serializeContext->Class<SimpleFPSSystemComponent, AZ::Component>()
                ->Version(0)
                ;
        }
    }

    void SimpleFPSSystemComponent::GetProvidedServices(AZ::ComponentDescriptor::DependencyArrayType& provided)
    {
        provided.push_back(AZ_CRC_CE("SimpleFPSService"));
    }

    void SimpleFPSSystemComponent::GetIncompatibleServices(AZ::ComponentDescriptor::DependencyArrayType& incompatible)
    {
        incompatible.push_back(AZ_CRC_CE("SimpleFPSService"));
    }

    void SimpleFPSSystemComponent::GetRequiredServices([[maybe_unused]] AZ::ComponentDescriptor::DependencyArrayType& required)
    {
    }

    void SimpleFPSSystemComponent::GetDependentServices([[maybe_unused]] AZ::ComponentDescriptor::DependencyArrayType& dependent)
    {
    }

    SimpleFPSSystemComponent::SimpleFPSSystemComponent()
    {
        if (SimpleFPSInterface::Get() == nullptr)
        {
            SimpleFPSInterface::Register(this);
        }
    }

    SimpleFPSSystemComponent::~SimpleFPSSystemComponent()
    {
        if (SimpleFPSInterface::Get() == this)
        {
            SimpleFPSInterface::Unregister(this);
        }
    }

    void SimpleFPSSystemComponent::Init()
    {
    }

    void SimpleFPSSystemComponent::Activate()
    {
        SimpleFPSRequestBus::Handler::BusConnect();
    }

    void SimpleFPSSystemComponent::Deactivate()
    {
        SimpleFPSRequestBus::Handler::BusDisconnect();
    }
}
