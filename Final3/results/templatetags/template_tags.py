from django import template
register = template.Library()

@register.filter
def get_verbose_field_name(instance, field_name):
    """
    Returns verbose_name for a field.
    """
    return instance._meta.get_field(field_name).verbose_name


@register.simple_tag
def verbose_name_tag(obj, field_name):
    return obj._meta.get_field(field_name).verbose_name

@register.filter
def verbose_name(obj):
    return obj._meta.verbose_name


@register.filter
def verbose_name_plural(obj):
    return obj._meta.verbose_name_plural

def get_queryset_field_verbose_name(queryset, arg):
    return queryset.model._meta.get_field(arg).verbose_name
register.filter('queryset_field_verbose_name', get_queryset_field_verbose_name)

