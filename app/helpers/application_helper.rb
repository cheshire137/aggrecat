module ApplicationHelper
  def page_title(path)
    case path
    when '/' then 'Activity'
    end
  end
end
