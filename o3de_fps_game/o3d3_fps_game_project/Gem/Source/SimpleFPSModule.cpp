
#include <AzCore/Memory/SystemAllocator.h>
#include <AzCore/Module/Module.h>

#include "SimpleFPSSystemComponent.h"

#include <SimpleFPS/SimpleFPSTypeIds.h>

namespace SimpleFPS
{
    class SimpleFPSModule
        : public AZ::Module
    {
    public:
        AZ_RTTI(SimpleFPSModule, SimpleFPSModuleTypeId, AZ::Module);
        AZ_CLASS_ALLOCATOR(SimpleFPSModule, AZ::SystemAllocator);

        SimpleFPSModule()
            : AZ::Module()
        {
            // Push results of [MyComponent]::CreateDescriptor() into m_descriptors here.
            m_descriptors.insert(m_descriptors.end(), {
                SimpleFPSSystemComponent::CreateDescriptor(),
            });
        }

        /**
         * Add required SystemComponents to the SystemEntity.
         */
        AZ::ComponentTypeList GetRequiredSystemComponents() const override
        {
            return AZ::ComponentTypeList{
                azrtti_typeid<SimpleFPSSystemComponent>(),
            };
        }
    };
}// namespace SimpleFPS

#if defined(O3DE_GEM_NAME)
AZ_DECLARE_MODULE_CLASS(AZ_JOIN(Gem_, O3DE_GEM_NAME), SimpleFPS::SimpleFPSModule)
#else
AZ_DECLARE_MODULE_CLASS(Gem_SimpleFPS, SimpleFPS::SimpleFPSModule)
#endif
